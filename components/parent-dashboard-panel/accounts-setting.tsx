import React from 'react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const AccountsSetting = () => {
    return (
        <>
            <div>

                <h2 className='text-secondary font-medium text-[48px] font-heading'><span className='text-foreground'>ACCOUNTS </span>SETTING</h2>
                <p className="text-muted-foreground">
                    Manage your personal information and preferences
                </p>

                <div className='flex flex-col gap-2 mt-4'>
                    <div className='bg-white rounded-md p-4'>
                        <h2 className='font-sans text-[22px] font-semibold'>Profile Information</h2>
                        <div className="space-y-4 mt-4">
                            {/* Full Name */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="fullName"
                                    className="mb-1 text-[16px] font-medium font-sans text-foreground"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="Enter your full name"
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="email"
                                    className="mb-1 text-[16px] font-medium font-sans text-foreground"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="phone"
                                    className="mb-1 text-[16px] font-medium font-sans text-foreground"
                                >
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                />
                            </div>
                            <div>
                                <Button className='bg-secondary px-4 py-2'>
                                    Save Changes
                                </Button>
                            </div>
                        </div>

                    </div>
                    <div className='bg-white rounded-md p-4'>
                        <h2 className='font-sans text-[22px] font-semibold'>Password & Security</h2>
                        <div className="space-y-4 mt-4">
                            {/* Full Name */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="fullName"
                                    className="mb-1 text-[16px] font-medium font-sans text-foreground"
                                >
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    placeholder="Enter your current password"
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="email"
                                    className="mb-1 text-[16px] font-medium font-sans text-foreground"
                                >
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    placeholder="Enter your new password"
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="phone"
                                    className="mb-1 text-[16px] font-medium font-sans text-foreground"
                                >
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmNewPassword"
                                    placeholder="Enter your new password"
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                />
                            </div>
                            <div>
                                <Button className='bg-secondary px-4 py-2'>
                                    Change Password
                                </Button>
                            </div>
                        </div>

                    </div>

                    <div className='bg-white rounded-md p-4'>
                        <h2 className='font-sans text-[22px] font-semibold'>Preferences</h2>
                        <div className='py-4 flex flex-col gap-4'>
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='font-sans text-[18px] font-normal'>Email Notifications</h2>
                                    <p className='font-sans text-[12px] text-gray-400'>Receive updates about your activity</p>
                                </div>
                                <input type="checkbox" className='pr-6' />
                            </div>

                            <Separator />
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='font-sans text-[18px] font-normal'>Newsletter</h2>
                                    <p className='font-sans text-[12px] text-gray-400'>Subscribe to our weekly newsletter</p>
                                </div>
                                <input type="checkbox" className='pr-6' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white flex flex-col gap-4 rounded-md p-4'>
                        <h2 className='font-sans text-[18px] text-red-500 font-normal'>Delete Account</h2>
                        <p className='font-sans text-[14px] text-gray-400'>Once you delete your account, there is no going back. Please be certain.</p>
                         <div>
                         <Button className='bg-red-500 text-white font-sans rounded-md '>Delete Account</Button>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountsSetting
