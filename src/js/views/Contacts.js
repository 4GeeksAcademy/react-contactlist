import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Contacts = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.loadContacts()

    }, [])
    console.log(store.contacts);
    return (
        <div className="container">
            <div className="contacts">
                <ul>
                    {store.contacts.map((contact) => {
                        return (

                            <div class="card">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{contact.full_name}</h5>
                                    <p class="card-text">{contact.email}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        )

                    })}
                </ul>
            </div>

        </div>

    )
}