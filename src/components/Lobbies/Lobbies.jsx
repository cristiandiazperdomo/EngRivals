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
                    <tr className="border-b border-gray-200">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                        >
                            Small Talk
                        </th>
                        <td className="px-6 py-4">Waiting</td>
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
                    <tr className="border-b border-gray-200">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                        >
                            Small Talk
                        </th>
                        <td className="px-6 py-4">Waiting</td>
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
                    <tr className="border-b border-gray-200">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                        >
                            Work
                        </th>
                        <td className="px-6 py-4">Waiting</td>
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
                    <tr className="border-b border-gray-200">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                        >
                            Vacations
                        </th>
                        <td className="px-6 py-4">Waiting</td>
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
                    <tr>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                        >
                            Groceries
                        </th>
                        <td className="px-6 py-4">Waiting</td>
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
                </tbody>
            </table>
        </div>
    );
};
