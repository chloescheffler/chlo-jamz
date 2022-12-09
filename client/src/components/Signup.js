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
            <div className="submit-form-background">
            <form className="submit-form" onSubmit={onSubmit}>
                <p><b>Don't have an account? Create one!</b></p>
                <br></br>
                <div className="input-text-signup">
                <input
                    type="text"
                    onChange={handleChange}
                    name="user_name"
                    value={formData.user_name}
                    placeholder="username"
                    className="date-input"
                />
                <br></br>
                <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    placeholder="password"
                    className="date-input"
                />
                <br></br>
                <input
                    type="date"
                    name="date_of_birth"
                    className="date-input"
                />
                <br></br>
                <input
                    type="number"
                    onChange={handleChange}
                    name="age"
                    value={formData.age}
                    placeholder="age"
                    className="date-input"
                />
                <br></br>
                <input
                    type="text"
                    onChange={handleChange}
                    name="profile_pic_url"
                    value={formData.profile_pic_url}
                    placeholder="image"
                />
                <br></br>
                <input
                    type="text"
                    onChange={handleChange}
                    name="pronouns"
                    value={formData.pronouns}
                    placeholder="pronouns"
                />
                <br></br>
                <input
                    type="text"
                    onChange={handleChange}
                    name="bio"
                    value={formData.bio}
                    placeholder="bio"
                />
                <br></br>
                <input type="submit" value="Create Account"/>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Signup;