import { useState } from "react";

const Emoji = () => {
    const [emoji, setEmoji] = useState("😀");
    const [contador, setContador] = useState(0);

    const changeEmojiAndIncrement = () => {
        setEmoji(emoji === "😀" ? "😔" : "😀");
        setContador(contador + 1);
    };

    return (
        <button onClick={changeEmojiAndIncrement}>{emoji}{contador}</button>
    );
}

export default Emoji;