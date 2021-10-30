import s from './Main.module.scss'

interface MainProps {
    header: React.ReactNode,
    body: React.ReactNode,
}

export default function Main({header, body}: MainProps) {
    return <div className={s["Main"]}>
        <header className={s["Main-header"]}>
            {header}
        </header>
        <div className={s["Main-body"]}>
            {body}
        </div>
    </div>
}