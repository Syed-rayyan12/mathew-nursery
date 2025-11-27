"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "../ui/separator";
import { Clock, Upload } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

export default function AddNurseryModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nurseryName: "",
    address: "",
    city: "",
    postCode: "",
    email: "",
    phone: "",
    website: "",
    openingHours: { start: "06:00", end: "21:00" },
    videoUrl: "",
    file: null as File | null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: any) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log(formData);
    // submit logic here
  };
    const availableFacilities = [
        'Outdoor Play Area',
        'Meals Provided',
        'Safety Training',
      
    ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Separator />
      <DialogContent className="max-w-6xl w-[100%] overflow-y-auto max-h-[90vh]">
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="font-sans text-xl">Add New Nursery</DialogTitle>
        </DialogHeader>

        {/* Step 1 */}
        {step === 1 && (
          <>
            <div>
              <h2 className="font-sans font-semibold text-lg">Basic Information</h2>
              <p className="text-sm text-muted-foreground">
                Fill in the details below to add a new nursery to your dashboard.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <div>
                <Label className="mb-2 block">Nursery Name</Label>
                <Input
                  name="nurseryName"
                  value={formData.nurseryName}
                  onChange={handleChange}
                  placeholder="Enter nursery name"
                />
              </div>

              <div>
                <Label className="mb-2 block">Address</Label>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                />
              </div>

              <div className="space-y-4 flex w-full justify-between gap-2">
                <div className="w-full">
                  <Label className="mb-2">City / Region</Label>
                  <Select
                    onValueChange={(value) => setFormData({ ...formData, city: value })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select city/region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="london">London</SelectItem>
                      <SelectItem value="manchester">Manchester</SelectItem>
                      <SelectItem value="birmingham">Birmingham</SelectItem>
                      <SelectItem value="liverpool">Liverpool</SelectItem>
                      <SelectItem value="leeds">Leeds</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full">
                  <Label className="mb-2">Post Code</Label>
                  <Input
                    name="postCode"
                    value={formData.postCode}
                    onChange={handleChange}
                    placeholder="e.g. SW1A 1AA"
                  />
                </div>
              </div>

              <div className="space-y-4 flex w-full justify-between gap-2">
                <div className="w-full">
                  <Label className="mb-2 block">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </div>

                <div className="w-full">
                  <Label className="mb-1 block">Phone Number (UK)</Label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +44 7123 456789"
                    pattern="^\+44\s?7\d{3}\s?\d{6}$"
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2">Website (Optional)</Label>
                <Textarea
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Enter website URL"
                  className="resize-none"
                />
              </div>
            </div>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <div>
              <h2 className="font-sans font-semibold text-lg">About & Facilities</h2>
              <p className="text-sm text-muted-foreground mb-2">
                Describe your nursery and available facilities.
              </p>
               <Textarea
                  name="desc"
                
                  placeholder="Enter website URL"
                  className="resize-none"
                />
            </div>
            
            <div>
                <h2 className="font-sans font-semibold text-lg mt-4">Available Facilities</h2>
                  <div className='flex gap-3'>
                                {availableFacilities.map((facility, index) => (
                                    <label key={index} className='flex items-center gap-2 border border-gray-300 rounded-md p-2'>
                                        <Checkbox />
                                        <span>{facility}</span>
                                    </label>
                                ))}
                            </div>
            </div>

              <h2 className="font-sans font-semibold text-lg mt-4">Opening Hours</h2>          
            <div className="flex items-center gap-2 mt-2">
                
              <Checkbox />
              <Label className="w-24">Monday To Friday</Label>
              <Input
                type="time"
                value={formData.openingHours.start}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    openingHours: { ...formData.openingHours, start: e.target.value },
                  })
                }
                className="flex-1 rounded-md"
              />
              <span className="px-1">to</span>
              <Input
                type="time"
                value={formData.openingHours.end}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    openingHours: { ...formData.openingHours, end: e.target.value },
                  })
                }
                className="flex-1 rounded-md"
              />
            </div>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <>
            <div>
              <h2 className="font-sans font-semibold text-lg">Media</h2>
              <p className="text-sm text-muted-foreground">
                Upload a file or add a video URL (optional)
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex flex-col gap-2 border border-dashed border-gray-400 p-4 rounded-md items-center justify-center">
                <Upload className="w-8 h-8 text-gray-500" />
                <span>Drag & Drop file or click to upload</span>
                <Input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer text-blue-500">
                  Select File
                </label>
                {formData.file && <p>Selected: {formData.file.name}</p>}
              </div>

              <div>
                <Label className="mb-2">Video URL (Optional)</Label>
                <Input
                  name="videoUrl"
                  value={formData.videoUrl}
                  onChange={handleChange}
                  placeholder="Enter video URL"
                />
              </div>
            </div>
          </>
        )}

        <DialogFooter className="mt-4 flex justify-between">
          {step > 1 && <Button variant="secondary" className="text-white cursor-pointer" onClick={handleBack}>Back</Button>}
          {step < 3 && <Button className="text-white cursor-pointer" onClick={handleNext}>Next</Button>}
          {step === 3 && <Button className="text-white cursor-pointer" onClick={handleSubmit}>Submit</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
