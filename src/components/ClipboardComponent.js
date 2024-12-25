import React, { useState } from "react";
import useClipboard from "../hooks/useClipboard";

function ClipboardComponent() {
    const { isCopied, copyToClipboard } = useClipboard();
    const [text, setText] = useState("");

    const handleCopy = () => {
        if (text.trim() !== "") {
            copyToClipboard(text);
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Clipboard Example</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to copy"
                rows={4}
                cols={40}
                style={{ marginBottom: "10px" }}
            />
            <br />
            <button onClick={handleCopy} disabled={!text.trim()}>
                {isCopied ? "Copied!" : "Copy to Clipboard"}
            </button>
        </div>
    );
}

export default ClipboardComponent;
