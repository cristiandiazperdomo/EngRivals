import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

export const UserPhrase = ({word, remove, position}) => {
    const {attributes, listeners, setNodeRef, transform, transition} =
        useSortable({id: word.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <span
            {...attributes}
            {...listeners}
            ref={setNodeRef}
            style={style}
            className="bg-transparent p-2 sm:p-3 border rounded-full w-100 max-h-12 border-2asd cursor-pointer cursor-grab active:cursor-grabbing flex relative"
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    remove(position);
                }}
                className="absolute -top-2 -right-2"
            >
                <button type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x w-5 h-5 p-0.5 bg-red-200 text-red-600 rounded-xl"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
            </form>
            {word.word}
        </span>
    );
};
