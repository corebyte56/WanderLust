"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import React from "react";

const Admin = () => {

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      country: formData.get("country"),
      category: formData.get("category"),
      price: parseInt(formData.get("price")),
      duration: formData.get("duration"),
      departureDate: formData.get("departureDate"),
      image: formData.get("image"),
      description: formData.get("description"),
      highlights: [
        formData.get("highlight1"),
        formData.get("highlight2"),
        formData.get("highlight3"),
        formData.get("highlight4"),
      ],
    };

    console.log(data);

    fetch("http://localhost:8000/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="min-h-screen bg-[#f8f8f8] py-20 px-6">

      <div className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-sm">

        {/* TOP */}
        <div className="border-b border-gray-200 px-10 py-8">

          <h1 className="text-5xl font-light text-black">
            Add New Destination
          </h1>

          <p className="text-gray-500 mt-3">
            Create premium travel packages for your travelers
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="p-10 space-y-10"
        >

          {/* ================= BASIC INFO ================= */}
          <div>

            <h2 className="text-2xl font-light mb-8">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* NAME */}
              <TextField name="name" isRequired>
                <Label>Destination Name</Label>

                <Input
                  placeholder="Bali Paradise"
                  className="mt-2"
                />

                <FieldError />
              </TextField>

              {/* COUNTRY */}
              <TextField name="country" isRequired>
                <Label>Country</Label>

                <Input
                  placeholder="Indonesia"
                  className="mt-2"
                />

                <FieldError />
              </TextField>

              {/* CATEGORY */}
              <TextField name="category" isRequired>
                <Label>Category</Label>

                <Input
                  placeholder="Beach / Adventure"
                  className="mt-2"
                />

                <FieldError />
              </TextField>

              {/* PRICE */}
              <TextField name="price" type="number" isRequired>
                <Label>Price</Label>

                <Input
                  type="number"
                  placeholder="2700"
                  className="mt-2"
                />

                <FieldError />
              </TextField>

              {/* DURATION */}
              <TextField name="duration" isRequired>
                <Label>Duration</Label>

                <Input
                  placeholder="7 Days / 6 Nights"
                  className="mt-2"
                />

                <FieldError />
              </TextField>

              {/* DATE */}
              <TextField
                name="departureDate"
                type="date"
                isRequired
              >
                <Label>Departure Date</Label>

                <Input
                  type="date"
                  className="mt-2"
                />

                <FieldError />
              </TextField>

            </div>
          </div>

          {/* ================= IMAGE ================= */}
          <div>

            <h2 className="text-2xl font-light mb-8">
              Destination Image
            </h2>

            <TextField name="image" isRequired>
              <Label>Image URL</Label>

              <Input
                type="url"
                placeholder="https://images.unsplash.com/photo..."
                className="mt-2"
              />

              <FieldError />
            </TextField>

          </div>

          {/* ================= DESCRIPTION ================= */}
          <div>

            <h2 className="text-2xl font-light mb-8">
              Description
            </h2>

            <TextField name="description" isRequired>
              <Label>Travel Description</Label>

              <TextArea
                placeholder="Describe the travel experience..."
                className="mt-2 min-h-[180px]"
              />

              <FieldError />
            </TextField>

          </div>

          {/* ================= HIGHLIGHTS ================= */}
          <div>

            <h2 className="text-2xl font-light mb-8">
              Tour Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <TextField name="highlight1">
                <Label>Highlight 1</Label>

                <Input
                  placeholder="Beautiful tropical beaches"
                  className="mt-2"
                />
              </TextField>

              <TextField name="highlight2">
                <Label>Highlight 2</Label>

                <Input
                  placeholder="Lush rice terraces & jungles"
                  className="mt-2"
                />
              </TextField>

              <TextField name="highlight3">
                <Label>Highlight 3</Label>

                <Input
                  placeholder="Stunning temple sunsets"
                  className="mt-2"
                />
              </TextField>

              <TextField name="highlight4">
                <Label>Highlight 4</Label>

                <Input
                  placeholder="Local food & spa culture"
                  className="mt-2"
                />
              </TextField>

            </div>
          </div>

          {/* ================= BUTTON ================= */}
          <div className="pt-4">

            <Button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-7 text-sm tracking-widest uppercase rounded-none duration-300"
            >
              Add Travel Package →
            </Button>

          </div>

        </form>
      </div>
    </section>
  );
};

export default Admin;