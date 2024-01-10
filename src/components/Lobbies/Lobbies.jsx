import {Button} from "@radix-ui/themes";

export const Lobbies = () => {
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th
                            scope="col"
                            class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th
                            scope="col"
                            class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                            People
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Join
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                            Small Talk
                        </th>
                        <td class="px-6 py-4">Waiting</td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            1/2
                        </td>
                        <td class="px-6 py-4">
                            <Button color="green" variant="outline">
                                Join
                            </Button>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                            Small Talk
                        </th>
                        <td class="px-6 py-4">Waiting</td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            1/2
                        </td>
                        <td class="px-6 py-4">
                            <Button color="green" variant="outline">
                                Join
                            </Button>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                            Work
                        </th>
                        <td class="px-6 py-4">Waiting</td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            1/2
                        </td>
                        <td class="px-6 py-4">
                            <Button color="green" variant="outline">
                                Join
                            </Button>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                            Vacations
                        </th>
                        <td class="px-6 py-4">Waiting</td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            1/2
                        </td>
                        <td class="px-6 py-4">
                            <Button color="green" variant="outline">
                                Join
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                            Groceries
                        </th>
                        <td class="px-6 py-4">Waiting</td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            1/2
                        </td>
                        <td class="px-6 py-4">
                            <Button color="green" variant="outline">
                                Join
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
