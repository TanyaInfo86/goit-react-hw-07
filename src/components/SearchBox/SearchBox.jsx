import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filters.name);

    const handleChange = (value) => {
        dispatch(changeFilter(value));
    };

    return (
        <div className={s.box}>
            <h2 className={s.text}>Find contacts by name</h2>
            <input
                className={s.input}
                type="text"
                value={filter}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;