
const getState = ({ getStore, setStore, getActions }) => {

	return {
		store: {
			contacts : []

		},
		actions: {
			loadContacts : ()=>{
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/6634")
				.then((response)=>{
					return response.json()
				})
				.then((data)=>{
					setStore({contacts:data})

				})
				.catch((error)=>{
					console.log(error);

				})

			}

		}
	};
};

export default getState;