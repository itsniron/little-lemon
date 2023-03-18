import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Spacer,
  VStack,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInputField,
} from "@chakra-ui/react";
import DatePicker from "./DatePicker";
// import DatePicker from "react-datepicker";
import * as Yup from "yup";
// import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ availableTimes, setAvailableTimes, submitFormData }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      date: new Date(),
      type: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      date: Yup.date().min(new Date(), "Please choose future date"),
    }),
    onSubmit: (values) => {
      submitFormData(values);
    },
  });
  const handleDate = (date) => {
    formik.setTouched({ date: true });
    formik.setFieldValue("date", date);
    setAvailableTimes({ setBookingDate: date });
  };
  return (
    <ChakraProvider>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(formik.resetForm);
        }}>
        <Heading as="h1" mb={8}>
          Reserve a table
        </Heading>
        <Spacer />
        <VStack spacing={2} align="stretch">
          <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName} isRequired>
            <FormLabel htmlFor="firstName">Name</FormLabel>
            <Input id="firstName" name="firstName" {...formik.getFieldProps("firstName")} />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.touched.email && formik.errors.email} isRequired>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input id="email" name="email" type="email" {...formik.getFieldProps("email")} />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.touched.date && formik.errors.date} isRequired>
            <FormLabel htmlFor="date">Date</FormLabel>
            <DatePicker id="date" name="date" selectedDate={formik.values.date} onChange={(date) => handleDate(date)} />
            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="time">Time</FormLabel>
            <Select id="time" name="time">
              {availableTimes.times.map((time, index) => {
                return (
                  <option value={time} key={index}>
                    {time}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Guests</FormLabel>
            <NumberInput defaultValue={2} min={2} max={10}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="type">Occassion</FormLabel>
            <Select id="type" name="type">
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="yellow">
            Confirm Reservation
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  );
};

export default BookingForm;
