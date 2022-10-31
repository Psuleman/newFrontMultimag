import Thead from "./Thead"

const Table = ({children}) => {
    return (
        <table>
            <Thead/>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}