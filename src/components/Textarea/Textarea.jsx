import {TextArea} from "@radix-ui/themes";

export const Textarea = () => {
    return (
        <TextArea
            className="mt-12 h-[100px]"
            size="3"
            placeholder="Here your answer…"
            color="gray"
            variant="soft"
        />
    );
};
