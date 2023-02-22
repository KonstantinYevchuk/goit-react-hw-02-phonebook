import PropTypes from 'prop-types';

export const ContactsList = ({contacts}) => {
    // console.log(contacts.name);
    return (
        <ol>
        {contacts.map(({id, name, number}) => {
        return <li key={id}>{name}: {number}</li>    
        }  
        )}
        </ol>        
    ) 
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired).isRequired
}