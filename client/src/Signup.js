import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ updateUser }) {
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const [formData, setFormData] = useState({
        user_name:'',
        password:'',
        date_of_birth: new Date(),
        age: '',
        profile_pic_url:'',
        pronouns:'',
        bio:''
    })

    const { user_name, password, date_of_birth, age, profile_pic_url, pronouns, bio } = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            user_name,
            password,
            date_of_birth,
            age,
            profile_pic_url,
            pronouns,
            bio
        }
    
        fetch('/users',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    history.push('/')
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div>
            <form className="submit-form" onSubmit={onSubmit}>
                <p> Don't have an account? Create one!</p>
                <input
                    type="text"
                    onChange={handleChange}
                    name="user_name"
                    value={formData.user_name}
                    placeholder="username"
                />
                <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    placeholder="password"
                />
                <input
                    type="date"
                    name="date_of_birth"
                />
                <input
                    type="number"
                    onChange={handleChange}
                    name="age"
                    value={formData.age}
                    placeholder="age"
                />
                <input
                    type="text"
                    onChange={handleChange}
                    name="profile_pic_url"
                    value={formData.profile_pic_url}
                    placeholder="image"
                />
                <input
                    type="text"
                    onChange={handleChange}
                    name="pronouns"
                    value={formData.pronouns}
                    placeholder="pronouns"
                />
                <input
                    type="text"
                    onChange={handleChange}
                    name="bio"
                    value={formData.bio}
                    placeholder="bio"
                />
                <input type="submit" value="Create Account"/>
            </form>
        </div>
    )
}

export default Signup;