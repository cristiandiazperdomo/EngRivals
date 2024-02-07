import {Button} from "@radix-ui/themes";

export const Lobbies = ({handleCreateLobby}) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50">
                            People
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Join
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        "Grammar",
                        "Grammar",
                        "Prepositions",
                        "Vocabulary",
                        "Verbs",
                    ].map((category) => (
                        <tr className="border-b border-gray-200">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                            >
                                {category}
                            </th>
                            <td className="px-6 py-4 flex items-center">
                                Waiting{" "}
                                <span class="relative flex h-3 w-3 ml-2">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-gray-200"></span>
                                </span>
                            </td>
                            <td className="px-6 py-4 bg-gray-50">1/2</td>
                            <td className="px-6 py-4">
                                <Button
                                    color="green"
                                    variant="outline"
                                    onClick={handleCreateLobby}
                                >
                                    Join
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
