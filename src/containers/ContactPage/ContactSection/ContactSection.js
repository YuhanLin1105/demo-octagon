import React, { Component } from 'react';

import classes from './ContactSection.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { updateObject } from '../../../shared/utilities';
import imgProfileHero from '../../../assets/images/our_profile_hero@3x.jpg';
import axios from '../../../axios-instance';

class ContactSection extends Component {
    state = {
        contactForm: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    input: {
                        id: 'fname',
                        type: 'text',
                        placeholder: "First name",
                        required: true,
                        pattern: `[a-zA-z]+`,
                        onChange: (event) => { return this.inputChangedHandler(event, 'firstName') }

                    },
                    label: {
                        htmlFor: 'fname',
                        text: 'Characters only'
                    },
                },
                value: '',
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    input: {
                        id: 'lname',
                        type: 'text',
                        placeholder: "Last name",
                        required: true,
                        pattern: `[a-zA-Z'-]+`,
                        onChange: (event) => { return this.inputChangedHandler(event, 'lastName') }

                    },
                    label: {
                        htmlFor: 'lname',
                        text: 'Characters, hyphens and apostrophes only'
                    },
                },
                value: '',
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    input: {
                        id: 'emailAddress',
                        type: 'email',
                        placeholder: "Email",
                        required: true,
                        pattern: "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
                        onChange: (event) => { return this.inputChangedHandler(event, 'email') }

                    },
                    label: {
                        htmlFor: 'emailAddress',
                        text: 'Email address only'
                    },
                },
                value: '',
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    input: {
                        id: 'zipCode',
                        type: 'input',
                        placeholder: "Zip code",
                        required: true,
                        pattern: `^\\d{5}(?:[-\\s]\\d{4})?$`,
                        onChange: (event) => { return this.inputChangedHandler(event, 'zipCode') }

                    },
                    label: {
                        htmlFor: 'zoipCode',
                        text: 'US zip code only'
                    },
                },
                value: '',
            },

            usStates: {
                elementType: 'select',
                elementConfig: {
                    select: {
                        id: 'usStates',
                        required: true,
                        onChange: (event) => { return this.inputChangedHandler(event, 'usStates') }

                    },
                    defaultOption: {
                        value:'',
                        selected: true,
                        disabled: true,
                        hidden: true,
                        text: 'U.S states'
                    },
                    options: {
                        "AL": "Alabama",
                        "AK": "Alaska",
                        "AS": "American Samoa",
                        "AZ": "Arizona",
                        "AR": "Arkansas",
                        "CA": "California",
                        "CO": "Colorado",
                        "CT": "Connecticut",
                        "DE": "Delaware",
                        "DC": "District Of Columbia",
                        "FM": "Federated States Of Micronesia",
                        "FL": "Florida",
                        "GA": "Georgia",
                        "GU": "Guam",
                        "HI": "Hawaii",
                        "ID": "Idaho",
                        "IL": "Illinois",
                        "IN": "Indiana",
                        "IA": "Iowa",
                        "KS": "Kansas",
                        "KY": "Kentucky",
                        "LA": "Louisiana",
                        "ME": "Maine",
                        "MH": "Marshall Islands",
                        "MD": "Maryland",
                        "MA": "Massachusetts",
                        "MI": "Michigan",
                        "MN": "Minnesota",
                        "MS": "Mississippi",
                        "MO": "Missouri",
                        "MT": "Montana",
                        "NE": "Nebraska",
                        "NV": "Nevada",
                        "NH": "New Hampshire",
                        "NJ": "New Jersey",
                        "NM": "New Mexico",
                        "NY": "New York",
                        "NC": "North Carolina",
                        "ND": "North Dakota",
                        "MP": "Northern Mariana Islands",
                        "OH": "Ohio",
                        "OK": "Oklahoma",
                        "OR": "Oregon",
                        "PW": "Palau",
                        "PA": "Pennsylvania",
                        "PR": "Puerto Rico",
                        "RI": "Rhode Island",
                        "SC": "South Carolina",
                        "SD": "South Dakota",
                        "TN": "Tennessee",
                        "TX": "Texas",
                        "UT": "Utah",
                        "VT": "Vermont",
                        "VI": "Virgin Islands",
                        "VA": "Virginia",
                        "WA": "Washington",
                        "WV": "West Virginia",
                        "WI": "Wisconsin",
                        "WY": "Wyoming"
                    }
                },
                value: ''
            },

        },
        isFormSubmit: false,
        error: null
    }

    submitHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let key in this.state.contactForm) {
            formData[key] = this.state.contactForm[key].value;
        }

        this.setState({
            isFormSubmit: true
        });

        axios.post('/NoAuthContactDate.json', formData)
            .then(response => {
                this.setState({
                    isFormSubmit: true
                });
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    isFormSubmit: true,
                    error: err
                });
            });

    }

    inputChangedHandler = (event, key) => {
        const updatedFormElement = updateObject(this.state.contactForm[key], {
            value: event.target.value,
        });

        const updatedcontactForm = updateObject(this.state.contactForm, {
            [key]: updatedFormElement
        });


        this.setState({
            contactForm: updatedcontactForm,
        });
    }


    render() {
        let formContent = (
            <div className={classes.Heading}>
                Thank you for your information!
            </div>
        );

        if (!this.state.isFormSubmit) {
            const formElement = Object.keys(this.state.contactForm).map(key => {
                return (
                    <Input
                        key={key}
                        inputtype={this.state.contactForm[key].elementType}
                        value={this.state.contactForm[key].value}
                        {...this.state.contactForm[key].elementConfig}
                    />
                )
            });

            formContent = (
                <React.Fragment>
                    <div className={classes.Heading}>
                        GET IN TOUCH
                    </div>
                    {formElement}
                    <div className={classes.Button}>
                        <Button
                            type='btnForm'>SUBMIT</Button>
                    </div>
                </React.Fragment>
            )

        } else if(this.state.error){
            formContent = (
                <div className={classes.Heading}>
                   {this.state.error.toString()}
                </div>
            );
        }




        return (
            <section className={classes.Section}>
                <div className={classes.Container}>
                    <form
                        className={classes.Form}
                        onSubmit={this.submitHandler}>

                        {formContent}

                    </form>
                    <div className={classes.ImgBox}>
                        <img
                            className={classes.Img}
                            src={imgProfileHero} alt="Our Profile Hero" />
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;