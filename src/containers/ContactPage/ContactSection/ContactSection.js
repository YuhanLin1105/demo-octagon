import React, { Component } from 'react';

import classes from './ContactSection.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import {updateObject} from '../../../shared/utilities';

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
                        onChange:(event)=>{return this.inputChangedHandler(event,'firstName') }

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
                        onChange:(event)=>{return this.inputChangedHandler(event, 'lastName') }

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
                        pattern:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
                        onChange:(event)=>{return this.inputChangedHandler(event, 'email') }

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
                        onChange:(event)=>{return this.inputChangedHandler(event, 'zipCode') }
                        
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
                        onChange:(event)=>{return this.inputChangedHandler(event, 'usStates') }
                        
                    },
                    defaultOption:{
                        selected:true,
                        disabled:true,
                        hidden:true,
                        text:'U.S states'
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
                value:''
            },

        },
        formValid: false
    }

    // orderHandler = (event) => {
    //     event.preventDefault();

    //     const formData={};
    //     for(let key in this.state.contactForm){
    //         formData[key]=this.state.contactForm[key].value;
    //     }

    //     const order = {
    //         ingredients: this.props.ings,
    //         price: this.props.price,
    //         formData,
    //         userId:this.props.userId

    //     }

    //     this.props.onBurgerPurchasing(order,this.props.token);
    // }

        inputChangedHandler = (event, key) => {
            const updatedFormElement = updateObject(this.state.contactForm[key], {
                value: event.target.value,
            });

            const updatedcontactForm = updateObject(this.state.contactForm, {
                [key]: updatedFormElement
            });

        //     let formValid=true;

        //     for(let key in updatedcontactForm){
        //         if(!updatedcontactForm
        // [key].valid){
        //             formValid=false;
        //         }
        //     }

            this.setState({
                contactForm: updatedcontactForm,
                });
        }

    // render() {

    //     let formInputs = [];
    //     for (let item in this.state.contactForm) {
    //         formInputs.push({
    //             id: item,
    //             config: this.state.contactForm
    // [item]
    //         });
    //     }
    //     let form = (
    //         <form onSubmit={this.orderHandler}>
    //             {formInputs.map((input) => (
    //                 <Input
    //                     inputtype={input.config.elementType}
    //                     elementConfig={input.config.elementConfig}
    //                     key={input.id}
    //                     value={input.config.value}
    //                     invalid={!input.config.valid}
    //                     touched = {input.config.touched}
    //                     changed={(event) => { return this.inputChangedHandler(event, input.id) }}
    //                 />))}
    //             <Button btnType="Success" disabled={!this.state.formValid}>ORDER</Button>
    //         </form>
    //     );
    //     if (this.props.loading) {
    //         form = <Spinner />;
    //     }
    //     return (<div className={classes.ContactData}>
    //         <h4>Enter your Contact Data</h4>
    //         {form}
    //     </div>
    //     )
    // }

    render() {
        const formElement = Object.keys(this.state.contactForm).map(key => {
            return (
                <Input
                    key={key}
                    inputtype={this.state.contactForm[key].elementType}
                    value={this.state.contactForm[key].value}
                    {...this.state.contactForm[key].elementConfig}
                />
            )
        })

        return (
            <section className={classes.Section}>
                <div className={classes.Container}>
                    <form className={classes.Form}>
                        <div className={classes.Heading}>
                            GET IN TOUCH
                        </div>

                        {formElement}
                       
                        <div className={classes.Button}>
                            <Button
                                type='btnForm'>SUBMIT</Button>
                        </div>
                    </form>
                    <div>
                        IMG
                </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;