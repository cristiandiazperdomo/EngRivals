import {Button} from "@radix-ui/themes";

export const Lobbies = ({handleCreateLobby}) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                            People
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Join
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                            Small Talk
                        </th>
                        <td className="px-6 py-4">Waiting</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            1/2
                        </td>
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
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                            Small Talk
                        </th>
                        <td className="px-6 py-4">Waiting</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            1/2
                        </td>
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
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                            Work
                        </th>
                        <td className="px-6 py-4">Waiting</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            1/2
                        </td>
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
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                            Vacations
                        </th>
                        <td className="px-6 py-4">Waiting</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            1/2
                        </td>
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
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                            Groceries
                        </th>
                        <td className="px-6 py-4">Waiting</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            1/2
                        </td>
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
