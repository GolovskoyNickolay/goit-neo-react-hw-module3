import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css["container-search"]}>
            <h3 className={css.title}>Search by name</h3>
            <input type="text" value={value} onChange={(e) => onFilter(e.target.value)} className={css.input} />
        </div>
    );
}
