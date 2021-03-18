import { connect } from 'react-redux';
import Genre from './genre';
import fetchFilms  from '../../actions/film_actions';


const mapStateToProps = (state) => {
    return(
        {films: Object.values(state.entities.films)}
        )
}

const mapDispatchToProps = dispatch => ({
    fetchFilms: () => dispatch(fetchFilms())
});

export default connect(mapStateToProps, mapDispatchToProps)(Genre);