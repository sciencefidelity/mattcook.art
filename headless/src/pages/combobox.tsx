import { Fragment, useState } from "react"
import { useQuery } from "react-query"
import { Combobox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import { Layout } from "../components/Layout"

interface Person {
  created: string
  name: string
}

const req = new Request("https://swapi.dev/api/people/")

export default function MyCombobox() {
  const { isLoading, error, data } = useQuery(
    "userData",
    async () => await fetch(req).then(res => res.json())
  )
  if (isLoading) return <div>Loading...</div>
  let errorMessage = "An unknown error has occurred"
  if (error instanceof Error) {
    errorMessage = `An error has occurred: ${error.message}`
  }
  if (error) return <div>{errorMessage}</div>

  const { results }: { results: Person[] } = data
  const people = results

  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState("")

  const filteredPeople =
    query === ""
      ? people
      : people.filter(person =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        )
  const colors = "from-teal-400 to-cyan-400"

  return (
    <Layout colors={colors}>
      <div className="fixed top-16 w-72">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(person: Person) => person.name}
                onChange={event => setQuery(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map(person => (
                    <Combobox.Option
                      key={person.created}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-teal-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </Layout>
  )
}
