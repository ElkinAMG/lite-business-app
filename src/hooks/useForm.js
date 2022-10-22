import { useEffect, useState } from "react";

/**
 *
 * @param {{ field: [RegExp] }} fields are the fields in the form with their respectives validations as Regex
 * @param {{ field: [string] }} defaultValues are the default values for each field
 * @param {boolean} isLoading is the value that defines if data from defaultValues is already fetched
 */

export default function useForm(fields, defaultValues, isLoading) {
  const [form, setForm] = useState(
    Object.keys(fields).reduce((obj, field) => {
      obj[field] = "";
      return obj;
    }, {})
  );

  const [errors, setErrors] = useState(
    Object.keys(fields).reduce((obj, field) => {
      obj[field] = [true];
      return obj;
    }, {})
  );

  const submitForm = (Fn) => {
    const errorsArr = validateForm().map((field) =>
      Object.values(field).map((err) => err)
    );
    if (!errorsArr.flat(2).includes(false)) {
      Fn();
    }
  };

  const handleFormChange = (field) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field.target.name]: field.target.value,
    }));
  };

  const validateForm = () => {
    const errors = Object.keys(fields).map((field) => ({
      [field]: fields[field].map((regex) => regex.test(form[field])),
    }));
    setErrors(
      errors.reduce((obj, field) => {
        obj[Object.keys(field)[0]] = Object.values(field);
        return obj;
      }, {})
    );
    return errors;
  };

  useEffect(() => {
    if (isLoading === false) {
      setForm(
        Object.keys(fields).reduce((obj, field) => {
          obj[field] = defaultValues[field] || "";
          return obj;
        }, {})
      );
    }
    // eslint-disable-next-line
  }, [isLoading]);

  return { form, handleFormChange, submitForm, validateForm, errors };
}
