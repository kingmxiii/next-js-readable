
const layout = ({ children, home }) => (
    <div data-test="layout-component">
        <header data-test="header-node">

        </header>
        <main data-test="main-node">
            {children}
        </main>
    </div>
)

export default layout