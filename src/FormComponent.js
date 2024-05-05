import React, { useState } from "react";

export const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        dob: "",
        language: [],
        city: "",
        gender: "",
        comment: "",
    });
    const [submittedForm, setSubmittedForm] = useState([]);

    const handleChange = (e) => {
        const {name, type, value, checked} = e.target;

        if(type === "checkbox"){
            let updatedLanguage = [...formData.language];
            if(checked){
                updatedLanguage.push(value);
            }else{
                updatedLanguage = updatedLanguage.filter(
                    (language) => language !== value
                );
            }

            setFormData((prevDate) => ({
                ...prevDate,
                language: updatedLanguage,
            }));
        }else{
            setFormData((prevDate) => ({
                ...prevDate,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedForm((prevSubmittedForm) => [...prevSubmittedForm, formData]);
        setFormData({
            name: "",
            age: "",
            dob: "",
            language: [],
            city: "",
            gender: "",
            comment: "",
        });
    };

    return(
        <div className="FormContainer" onSubmit={handleSubmit}>
            <form>
                <label>
                    Name
                    <br/>
                    <input name="name" type="text" value={formData.name} onChange={handleChange} />
                </label><br/>
                <label>
                    Age
                    <br/>
                    <input name="age" type="number" value={formData.age} onChange={handleChange} />
                </label><br/>
                <label>
                    DOB
                    <br/>
                    <input name="dob" type="date" value={formData.dob} onChange={handleChange} />
                </label><br/>
                <label>
                    Language
                    <br/>
                    <input name="language" type="checkbox" value="English" checked={formData.language.includes('English')} onChange={handleChange} />
                    English
                    <br/>
                    <input name="language" type="checkbox" value="Tamil" checked={formData.language.includes('Tamil')} onChange={handleChange} />
                    Tamil
                    <br/>
                    <input name="language" type="checkbox" value="French" checked={formData.language.includes('French')} onChange={handleChange} />
                    French
                    <br/>
                    <input name="language" type="checkbox" value="Hindi" checked={formData.language.includes('Hindi')} onChange={handleChange} />
                    Hindi

                </label><br/>
                <label>
                    City
                    <br/>
                    <select name="city"  value={formData.city} onChange={handleChange} >
                        <option value="">select</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="London">London</option>
                        <option value="Paris">Paris</option>
                    </select>
                </label><br/>
                <label>
                    Gender
                    <br/>
                    <input name="gender" type="radio" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />
                    Female
                    <br/>
                    <input name="gender" type="radio" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
                    Male
                </label><br/>
                <label>
                    Comment
                    <br/>
                    <textarea name="comment" type="textarea" value={formData.comment} onChange={handleChange} />
                </label>
                <br/><br/>
                <button type="submit">Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>DOB</th>
                        <th>Languages</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {submittedForm.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.dob}</td>
                            <td>{data.language.join(", ")}</td>
                            <td>{data.city}</td>
                            <td>{data.gender}</td>
                            <td>{data.comment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}