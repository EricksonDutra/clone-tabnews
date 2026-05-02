import controller from "infra/controller.js";
import activation from "models/activation";
import { createRouter } from "next-connect";

const router = createRouter();

router.patch(patchHandler);

export default router.handler(controller.errorHandlers);

async function patchHandler(req, res) {
  const activationTokenId = req.query.token_id;
  console.log(`activationTokenId == ${activationTokenId}`);

  const validActivationToken =
    await activation.findOneByValidId(activationTokenId);
  console.log(`validActivationToken == ${validActivationToken}`);

  const usedActivationToken =
    await activation.markTokenAsUsed(activationTokenId);
  console.log(`  const usedActivationToken =
 == ${usedActivationToken}`);

  await activation.activateUserByUserId(validActivationToken.user_id);

  return res.status(200).json(usedActivationToken);
}
