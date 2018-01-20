import React, { Component } from 'react';

import classes from './ContactSection.css';

class ContactSection extends Component {
    state = {
        contactForm: {
            FirstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "First Name"
                },
                validation: {
                    required: true,
                    isFirstName: true,
                },
                value: '',
                valid: false,
                touched: false
            },
            inputEmail: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Your email"
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            LastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Last Name"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },

            inputZipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Postal code"
                },
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                value: '',
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    type: 'select',
                    options: ['fastest', 'cheapest']
                },
                value: 'fastest',
                validation: {},
                valid: true

            }
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

    //     inputChangedHandler = (event, id) => {
    //         const updatedFormElement = updateObject(this.state.contactForm
    // [id], {
    //             value: event.target.value,
    //             valid: checkValidity(event.target.value, this.state.contactForm
    //     [id].validation),
    //             touched: true
    //         });

    //         const updatedcontactForm = updateObject(this.state.contactForm
    // , {
    //             [id]: updatedFormElement
    //         });

    //         let formValid=true;

    //         for(let key in updatedcontactForm){
    //             if(!updatedcontactForm
    //     [key].valid){
    //                 formValid=false;
    //             }
    //         }

    //         this.setState({contactForm
    // : updatedcontactForm
    // , formValid:formValid});
    //     }

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
        return (
            <div>
                dsf
            </div>
        );
    }
}

export default ContactSection;