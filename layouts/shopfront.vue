<template>
    <div class="bg-white">
        <div>
            <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-black bg-opacity-25"></div>

                <div class="fixed inset-0 z-40 flex">

                    <div
                        class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div class="flex items-center justify-between px-4">
                            <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                            <button type="button"
                                class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                <span class="sr-only">Close menu</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <!-- Filters -->
                        <form class="mt-4 border-t border-gray-200">

                            <div class="border-t border-gray-200 px-4 py-6">
                                <h3 class="-mx-2 -my-3 flow-root">
                                    <!-- Expand/collapse section button -->
                                    <button type="button"
                                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-mobile-1" aria-expanded="false">
                                        <span class="font-medium text-gray-900">Category</span>
                                        <span class="ml-6 flex items-center">
                                            <!-- Expand icon, show/hide based on section open state. -->
                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                            <!-- Collapse icon, show/hide based on section open state. -->
                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <!-- Filter section, show/hide based on section state. -->
                                <div class="pt-6" id="filter-section-mobile-1">
                                    <div class="space-y-6">
                                        <div class="flex items-center">
                                            <input id="filter-mobile-category-0" name="category[]" value="new-arrivals"
                                                type="checkbox"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-category-0"
                                                class="ml-3 min-w-0 flex-1 text-gray-500">Tapp Shop</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-mobile-category-1" name="category[]" value="sale"
                                                type="checkbox"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-category-1"
                                                class="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-mobile-category-2" name="category[]" value="travel"
                                                type="checkbox" checked
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-category-2"
                                                class="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-mobile-category-3" name="category[]" value="organization"
                                                type="checkbox"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-category-3"
                                                class="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="filter-mobile-category-4" name="category[]" value="accessories"
                                                type="checkbox"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                                            <label for="filter-mobile-category-4"
                                                class="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900">Tapp shop</h1>

                    <div class="flex items-center">


                    <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                        <span class="sr-only">View grid</span>
                        <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                        <span class="sr-only">Filters</span>
                        <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            <slot />
        </main>
    </div>
</div></template>