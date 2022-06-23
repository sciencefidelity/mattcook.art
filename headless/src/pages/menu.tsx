import { Menu } from "@headlessui/react"

const ButtonComponent = () => {
  return (
    <div className="container">
      <main>
        <div
          className=""
          style={{
            display: "grid",
            height: "100vh",
            placeItems: "center"
          }}
        >
          <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Documentation
                  </a>
                )}
              </Menu.Item>
              <Menu.Item disabled>
                <span className="opacity-75">
                  Invite a friend (coming soon!)
                </span>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </main>
    </div>
  )
}
export default ButtonComponent
