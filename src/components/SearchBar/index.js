import PropTypes from 'prop-types';
import * as S from './styles';

const SearchBar = ({ handleChange, val }) => (
  <>
    <S.Search
      type="search"
      onChange={(e) => handleChange(e.target.value)}
      value={val}
    />
  </>
); //

SearchBar.propTypes = {
  val: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
