import controller from "infra/controller.js";
import activation from "models/activation";
import authorization from "models/authorization";
import { createRouter } from "next-connect";

export default createRouter()
  .use(controller.injectAnonymousOrUser)
  .patch(controller.canRequest("read:activation_token"), patchHandler)
  .handler(controller.errorHandlers);

async function patchHandler(req, res) {
  const activationTokenId = req.query.token_id;
  const userTryingToPatch = req.context.user;

  const validActivationToken =
    await activation.findOneByValidId(activationTokenId);

  await activation.activateUserByUserId(validActivationToken.user_id);

  const usedActivationToken =
    await activation.markTokenAsUsed(activationTokenId);

  const secureOutputValues = authorization.filterOutput(
    userTryingToPatch,
    "read:activation_token",
    usedActivationToken,
  );
  return res.status(200).json(secureOutputValues);
}
