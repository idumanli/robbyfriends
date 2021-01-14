import React from 'react' ;

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
		      <input 
			      className=' f3 tc pa3 ba b--green bg-lightest-blue' 
			      type= 'searc' 
			      placeholder= 'search robots' 
			      onChange={searchChange}
		      />
	    </div> 
	); 
	   
}

export default SearchBox;