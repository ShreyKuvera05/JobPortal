import { ChevronUp, Info } from "feather-icons-react/build/IconComponents";
import React, { useEffect, useState } from "react";
import { PlusCircle } from "react-feather";
import { Link } from "react-router-dom";
import ResDatePicker from "../reusableComps/resDatePicker";
import { all_routes } from "../../Router/all_routes";
import { useDispatch, useSelector } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { setToogleHeader } from "../../core/redux/action";
import ResSelect from "../reusableComps/resSelect";
import { useLocation } from "react-router-dom";
import moment from "moment";
import toast from "react-hot-toast";
import { label } from "yet-another-react-lightbox";
const CandidateEnrollment = () => {
  const location = useLocation();
  const route = all_routes;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.toggle_header);
  const [formData, setFormData] = useState({});
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
  });
  const [selectedProduct, setSelectedProduct] = React.useState({
    Gender: null,
    BloodGroup: null,
    Country: null,
    Department: null,
    Designation: null,
    Nationality: null,
    Types: null,
    Years: null,
    Months: null,
  });
  const [errors, setErrors] = useState({});

  //   if (location.state !== null) {
  //     const getData = location.state.data;
  //     setFormData(getData);
  //     let gender = {
  //       value: getData.gender,
  //       label: getData.genderName,
  //     };
  //     let bloodgroup = {
  //       value: getData.BloodGroup,
  //       label: getData.BloodGroupName,
  //     };
  //     let country = {
  //       value: getData.country,
  //       label: getData.countryName,
  //     };
  //     let department = {
  //       value: getData.department,
  //       label: getData.departmentName,
  //     };
  //     let designation = {
  //       value: getData.designation,
  //       label: getData.designationName,
  //     };
  //     let nationality = {
  //       value: getData.nationality,
  //       label: getData.nationalityName,
  //     };
  //     let type = {
  //       value: getData.type,
  //       label: getData.typeName,
  //     };

  //     setSelectedProduct({
  //       Gender: gender,
  //       BloodGroup: bloodgroup,
  //       Country: country,
  //       Department: department,
  //       Designation: designation,
  //       Nationality: nationality,
  //       Type: type,
  //     });
  //   }
  // }, [location]);

  const renderCollapseTooltip = (props) => (
    <Tooltip id="refresh-tooltip" {...props}>
      Collapse
    </Tooltip>
  );

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const handleToggleConfirmPassword = () => {
    setConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  // =============================================SELECT OPTIONS ==========================
  const gender = [
    { value: 1, label: "Choose" },
    { value: 2, label: "Male" },
    { value: 3, label: "Female" },
  ];
  const nationality = [
    { value: 1, label: "Choose" },
    { value: 2, label: "United Kingdom" },
    { value: 3, label: "India" },
  ];
  const types = [
    { value: 0, label: "Choose" },
    { value: 1, label: "Regular" },
  ];

  const departments = [
    { value: 0, label: "Choose" },
    { value: 1, label: "UI/UX" },
    { value: 2, label: "Support" },
    { value: 3, label: "HR" },
    { value: 4, label: "Engineering" },
  ];

  const designation = [
    { value: 0, label: "Choose" },
    { value: 1, label: "Designer" },
    { value: 2, label: "Developer" },
    { value: 3, label: "Tester" },
  ];

  const bloodgroup = [
    { value: 0, label: "Select" },
    { value: 1, label: "A+" },
    { value: 2, label: "A-" },
    { value: 3, label: "B-" },
    { value: 4, label: "O-" },
    { value: 5, label: "O-" },
    { value: 6, label: "AB-" },
    { value: 7, label: "AB-" },
  ];

  const years = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];
  const months = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
  ];
  const country = [
    { value: 0, label: "Choose" },
    { value: 1, label: "United Kingdom" },
    { value: 2, label: "USA" },
  ];

  // =============================================SELECT OPTIONS ==========================

  // ====================================HANDLERS================================
  // --------inputFieldHandler-----
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  // --------inputFieldHandler-----

  // ----------SelectListHandler-------

  const handleSelectChange = (
    selectedOption,
    selectName,
    setSelectedProduct
  ) => {
    if (selectName === "Gender") {
      if (selectedOption !== null) {
        let gender = selectedOption;
        setFormData({
          ...formData,
          gender: gender.value,
          genderName: gender.label,
        });
      }
    }
    setSelectedProduct((prevSelectedValues) => ({
      ...prevSelectedValues,
      [selectName]: selectedOption,
    }));
  };
  // ----------SelectListHandler-------

  // ----------------DateHandler--------------
  const handleDateChange = (date, dateField) => {
    setDates((prevDates) => ({
      ...prevDates,
      [dateField]: date,
    }));
  };
  // ----------------DateHandler--------------

  // ====================================HANDLERS================================

  // ========================FORM VALIDATION ========================================
  const validateForm = () => {
    const newErrors = {};

    if (!formData.Phone) {
      newErrors.Phone = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.Phone)) {
      newErrors.Phone = "Mobile number must be 10 digits";
    }

    if (!formData.EmailId) {
      newErrors.EmailId = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.EmailId)) {
      newErrors.EmailId = "Invalid email address";
    }
    if (formData.fPass !== formData.cnfPass) {
      newErrors.PasswordsMatch = "Passwords do not match";
    }
    if (formData.Name && !formData.Name.trim()) {
      newErrors.Name = "Name is required";
    }
    if (formData.lName && !formData.lName.trim()) {
      newErrors.lName = "Name is required";
    }
    // if (!selectedRole.value) {
    //   setSelectedOptionError(true);
    // }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ===========================SUBMIT===================================
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let startDate = moment(dates.startDate).format("DD/MM/YYYY");
      let endDate = moment(dates.endDate).format("DD/MM/YYYY");

      console.log(JSON.stringify(formData));
    } else {
      console.log(JSON.stringify(formData));
      toast.error("Form Validation Failed");
    }
  };
  // ===========================SUBMIT===================================

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>New Candidate</h4>
                <h6>Create new Candidate</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <li>
                {/* <div className="page-btn">
                  <Link to={route.employeegrid} className="btn btn-secondary">
                    <ArrowLeft className="me-2" />
                    Back to Employee List
                  </Link>
                </div> */}
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={renderCollapseTooltip}>
                  <Link
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="collapse-header"
                    className={data ? "active" : ""}
                    onClick={() => {
                      dispatch(setToogleHeader(!data));
                    }}
                  >
                    <ChevronUp />
                  </Link>
                </OverlayTrigger>
              </li>
            </ul>
          </div>
          {/* /product list */}
          <form>
            <div className="card">
              <div className="card-body">
                <div className="new-employee-field">
                  <div className="card-title-head">
                    <h6>
                      <span>
                        <Info className="feather-edit" />
                      </span>
                      Employee Information
                    </h6>
                  </div>
                  <div className="profile-pic-upload">
                    <div className="profile-pic">
                      <span>
                        <PlusCircle className="plus-down-add" />
                        Profile Photo
                      </span>
                    </div>
                    <div className="input-blocks mb-0">
                      <div className="image-upload mb-0">
                        <input type="file" />
                        <div className="image-uploads">
                          <h4>Change Image</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.Name && "is-invalid shakersss"
                          }`}
                          value={formData.Name}
                          name="Name"
                          onChange={handleInputChange}
                        />
                        {errors.Name && (
                          <div className="invalid-feedback">{errors.Name}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Fathers Name</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.fName && "is-invalid shakersss"
                          }`}
                          value={formData.fName}
                          name="fName"
                          onChange={handleInputChange}
                        />
                        {errors.fName && (
                          <div className="invalid-feedback">{errors.fName}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <ResDatePicker
                        labelName="DOB"
                        value={dates.DOB}
                        onDateChange={(date) => handleDateChange(date, "DOB")}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Current Address</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.CAdress}
                          name="CAdress"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Permanent Address</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.PAddress}
                          name="PAdress"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Whatsapp Mobile No.
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.WMNo}
                          name="WMNo"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Alternate Mobile No.
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.AMNo}
                          name="AMNo"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">PAN No</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.PNo}
                          name="PNo"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Aadhar No</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.ANo}
                          name="ANo"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* <div className="mb-3">
                        <div className="add-newplus">
                          <label className="form-label">Shift</label>
                          <Link to="#">
                            <span>
                              <PlusCircle className="plus-down-add" />
                              Add new
                            </span>
                          </Link>
                        </div>

                        <ResSelect
                          options={types}
                          value={selectedProduct.Types}
                          onChange={(selectedOption) =>
                            handleSelectChange(
                              selectedOption,
                              "Types",
                              setSelectedProduct
                            )
                          }
                          id="select21"
                          isMulti={false}
                          placeholder="Types"
                        />
                      </div> */}
                      <div className="mb-3">
                        <label className="form-label">
                          Education Qualification
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.EdQual}
                          name="EdQual"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Technical Qualification
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.TQual}
                          name="TQual"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Designation</label>

                        <ResSelect
                          options={designation}
                          value={selectedProduct.Designation}
                          onChange={(selectedOption) =>
                            handleSelectChange(
                              selectedOption,
                              "Designation",
                              setSelectedProduct
                            )
                          }
                          id="select21"
                          isMulti={false}
                          placeholder="Designation"
                        />
                      </div>
                    </div>
                    <label className="form-label">
                      {" "}
                      <b>Total Work Experience</b>
                    </label>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Years</label>
                        <ResSelect
                          options={years}
                          value={selectedProduct.Years}
                          onChange={(selectedOption) =>
                            handleSelectChange(
                              selectedOption,
                              "Years",
                              setSelectedProduct
                            )
                          }
                          id="select21"
                          isMulti={false}
                          placeholder="Years"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Months</label>
                        <ResSelect
                          options={months}
                          value={selectedProduct.Months}
                          onChange={(selectedOption) =>
                            handleSelectChange(
                              selectedOption,
                              "Months",
                              setSelectedProduct
                            )
                          }
                          id="select21"
                          isMulti={false}
                          placeholder="Months"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="other-info">
                    <div className="card-title-head">
                      <h6>
                        <span>
                          <Info className="feather-edit" />
                        </span>
                        Current Company Details
                      </h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Company Name</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.CName}
                            name="CName"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Company Address</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.CAdress}
                            name="CAdress"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Location</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.CAdress}
                            name="CAdress"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Website</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.Website}
                            name="Webiste"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Designation</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.Designation}
                            name="Designation"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">KRA</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.KRA}
                            name="KRA"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Reallocate</label>
                          <br />
                          <label htmlFor="">yes No fields</label>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Zipcode</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.Zipcode}
                            name="Zipcode"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="other-info">
                    <div className="card-title-head">
                      <h6>
                        <span>
                          <Info className="feather-edit" />
                        </span>
                        Previous Company Details
                      </h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Company Name</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.PCName}
                            name="PCName"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Company Address</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.PCAdress}
                            name="PCAdress"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Location</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.PCAdress}
                            name="PCAdress"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <ResDatePicker
                            labelName="Working From"
                            value={dates.startDate}
                            onDateChange={(date) =>
                              handleDateChange(date, "StartDate")
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <ResDatePicker
                            labelName="Worked Till"
                            value={dates.endDate}
                            onDateChange={(date) =>
                              handleDateChange(date, "EndDate")
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="other-info">
                    <div className="card-title-head">
                      <h6>
                        <span>
                          <Info className="feather-edit" />
                        </span>
                        Personal Details
                      </h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Upload Resume</label>
                          <input
                            type="file"
                            className="form-control"
                            // value={formData.PCName}
                            // name="PCName"
                            // onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Company Address</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.PCAdress}
                            name="PCAdress"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Location</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formData.PCAdress}
                            name="PCAdress"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <ResDatePicker
                            labelName="Working From"
                            value={dates.startDate}
                            onDateChange={(date) =>
                              handleDateChange(date, "StartDate")
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                          <ResDatePicker
                            labelName="Worked Till"
                            value={dates.endDate}
                            onDateChange={(date) =>
                              handleDateChange(date, "EndDate")
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /product list */}
            <div className="text-end mb-3">
              <Link to={route.employeegrid}>
                <button type="button" className="btn btn-cancel me-2">
                  Cancel
                </button>
              </Link>
              <Link to="#" className="btn btn-submit" onClick={handleSubmit}>
                Save Product
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateEnrollment;
