import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im'
import Notiflix from 'notiflix';
import PropTypes from 'prop-types'


class Searchbar extends Component {

    state = {
        searchQuery: ''
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            Notiflix.Notify.warning('Будь ласка, введіть щось!');
            return;
        }

        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
        
    };

    handleChange = event => {
        this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    }

    render() {
        return (
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={s.SearchButton}>
            <span>
            <ImSearch style={{marginRight: 8}} />
            </span>
            </button>

            <input
            className={s.SearchFormInput}
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Пошук зображень і фотографій"
            />
            </form>
        </header>
        )
    }

}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
}

export default Searchbar;