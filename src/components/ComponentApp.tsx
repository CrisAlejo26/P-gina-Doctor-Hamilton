import { Nav } from "./Nav"

export const ComponentApp = ({ component }: { component: () => JSX.Element}) => {
    return (
        <div className="app">
            <Nav/>
            { component() }
        </div>
    )
}
