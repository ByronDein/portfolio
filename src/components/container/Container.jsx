import PropTypes from 'prop-types';


const Container = ({children}) => {
  return (
    <div className='bg-red-950  mx-auto'>{children}</div>
  )
}


Container.propTypes = {
    children: PropTypes.node.isRequired
}

export default Container