 "use client";
import React, { useState, useCallback } from "react";
import { PageTitle } from "../../components/PageTitle";
import MainComponent from "../../components/MainComponent";
import { CopyIcon } from "../../components/IconComponent";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Textarea } from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";

const Integrations = () => {
    const reactCode = `...`; // Your reactCode content here
    const vueCode = ``;

    const [react, setReactCode] = useState(reactCode);
    const [vue, setVueCode] = useState(vueCode);
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(() => {
        setCopied(true);
        toast.success("Successfully copied!");
    }, []);

    return (
        <div>
            <Toaster />
            <PageTitle title="Integrations" />

            <MainComponent>
                <Section title="ReactJs Example" code={react} onCopy={handleCopy} copied={copied} />
                <Section title="VueJs Example" code={vue} onCopy={handleCopy} copied={copied} />
            </MainComponent>
        </div>
    );
};

const Section = ({ title, code, onCopy, copied }) => (
    <div>
        <div className="mb-4">
            <h3 className="text-center text-xl font-medium">{title}</h3>
        </div>
        <div className="w-full">
            <div className="border border-[#F1F3F5] rounded-lg p-3 relative">
                <Textarea
                    value={code}
                    readOnly
                    rows={8}
                    style={{ fontFamily: "monospace" }}
                    className="w-full text-red-700 py-3 px-3 resize-none focus:border-none focus-within:border-none active:border-none focus-visible:border-none focus:outline-none focus-within:outline-none active:outline-none focus-visible:outline-none"
                />
                <CopyToClipboard
                    text={code}
                    onCopy={onCopy}
                    className="text-sm rounded-lg absolute right-0 bottom-0 px-3 py-3 bg-white flex items-center gap-2 border-l border-t border-[#F1F3f5] text-[#111827]"
                >
                    <button>
                        <CopyIcon />
                        <span>{copied ? "Copied" : "Copy to Clipboard"}</span>
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    </div>
);

export default Integrations;
