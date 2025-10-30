import Image from "next/image";
import { useState } from "react";

function Home() {
  const [reacao, setReacao] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-500 text-white">
      <h1 className="text-2xl font-bold mb-4">Gostou do site?</h1>

      <div className="flex gap-8">
        <Image
          src="https://st.depositphotos.com/1001911/55508/v/450/depositphotos_555089554-stock-illustration-happy-emoji-emoticon-showing-double.jpg"
          width={200}
          height={200}
          alt="Emoji feliz"
          onClick={() => setReacao(true)}
          className="cursor-pointer hover:scale-105 transition-transform"
        />

        <hr/>

        <Image
          src="https://png.pngtree.com/png-clipart/20240826/original/pngtree-clipart-of-sad-emoji-png-image_15854157.png"
          width={200}
          height={200}
          alt="Outro emoji feliz"
          onClick={() => setReacao(false)}
          className="cursor-pointer hover:scale-105 transition-transform "
        />
      </div>

      <h1 className="mt-6 text-xl">
        {reacao ? "😄 Que bom que gostou!" : "🙁 Poxa vou me esforçar para melhorar..."}
      </h1>
    </div>
  );
}

export default Home;
