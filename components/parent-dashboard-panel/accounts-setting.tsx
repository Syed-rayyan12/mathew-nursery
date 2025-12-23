'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { authService } from '@/lib/api/auth'
import { toast } from 'sonner'
import { apiClient } from '@/lib/api/client'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'

const AccountsSetting = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    useEffect(() => {
        const userData = authService.getCurrentUser();
        if (userData) {
            setUser(userData);
            setFormData({
                firstName: userData.firstName || '',
                lastName: userData.lastName || '',
                email: userData.email || '',
                phone: userData.phone || ''
            });
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveProfile = async () => {
        try {
            setLoading(true);
            const response = await authService.updateProfile({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone
            });

            if (response.success && response.data) {
                // Update local storage and state
                const updatedUser = { ...user, ...formData };
                localStorage.setItem('user', JSON.stringify(updatedUser));
                setUser(updatedUser);
                setIsEditingProfile(false);
                toast.success('Profile updated successfully!');
            }
        } catch (error: any) {
            console.error('Profile update error:', error);
            toast.error(error?.response?.data?.message || 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    const handleChangePassword = async () => {
        if (!passwordData.currentPassword || !passwordData.newPassword) {
            toast.error('Please fill in all password fields');
            return;
        }

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast.error('New passwords do not match');
            return;
        }

        if (passwordData.newPassword.length < 6) {
            toast.error('New password must be at least 6 characters');
            return;
        }

        try {
            setLoading(true);
            const response = await authService.changePassword({
                currentPassword: passwordData.currentPassword,
                newPassword: passwordData.newPassword
            });

            if (response.success) {
                toast.success('Password changed successfully!');
                setPasswordData({
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                });
            }
        } catch (error: any) {
            console.error('Password change error:', error);
            toast.error(error?.response?.data?.message || 'Failed to change password');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteAccount = async () => {
        try {
            setDeleteLoading(true);
            const response = await apiClient.delete('/auth/delete-account', true);

            if (response.success) {
                toast.success('Account deleted successfully');
                authService.logout();
            }
        } catch (error: any) {
            console.error('Delete account error:', error);
            toast.error(error?.response?.data?.message || 'Failed to delete account');
        } finally {
            setDeleteLoading(false);
            setShowDeleteModal(false);
        }
    };

    return (
        <>
            <div>

                <h2 className='text-secondary font-medium text-[48px] font-heading'><span className='text-foreground'>ACCOUNTS </span>SETTING</h2>
                <p className="text-muted-foreground">
                    Manage your personal information and preferences
                </p>

                <div className='flex flex-col gap-2 mt-4'>
                    <div className='bg-white rounded-md p-4'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='font-sans text-[22px] font-semibold'>Profile Information</h2>
                            {!isEditingProfile ? (
                                <Button onClick={() => setIsEditingProfile(true)} variant="outline" className='px-4 py-2'>
                                    Edit
                                </Button>
                            ) : (
                                <Button onClick={() => {
                                    setIsEditingProfile(false);
                                    // Reset form data to original user data
                                    setFormData({
                                        firstName: user?.firstName || '',
                                        lastName: user?.lastName || '',
                                        email: user?.email || '',
                                        phone: user?.phone || ''
                                    });
                                }} variant="outline" className='px-4 py-2'>
                                    Cancel
                                </Button>
                            )}
                        </div>
                        <div className="space-y-4">
                            {/* First Name */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="firstName"
                                    className="mb-1 text-[16px] font-medium font-sans text-foreground"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    disabled={!isEditingProfile}
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* Last Name */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="lastName"
                                    className="mb-1 text-[16px] font-medium font-sans text-foreground"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    disabled={!isEditingProfile}
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
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
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    disabled={!isEditingProfile}
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
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
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    disabled={!isEditingProfile}
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                                />
                            </div>
                            {isEditingProfile && (
                                <div>
                                    <Button onClick={handleSaveProfile} disabled={loading} className='bg-secondary px-4 py-2'>
                                        {loading ? 'Saving...' : 'Save Changes'}
                                    </Button>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className='bg-white rounded-md p-4'>
                        <h2 className='font-sans text-[22px] font-semibold'>Password & Security</h2>
                        <div className="space-y-4 mt-4">
                            {/* Current Password */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="currentPassword"
                                    className="mb-1 text-[16px] font-medium font-sans text-foreground"
                                >
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    name="currentPassword"
                                    value={passwordData.currentPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter your current password"
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                />
                            </div>

                            {/* New Password */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="newPassword"
                                    className="mb-1 text-[16px] font-medium font-sans text-foreground"
                                >
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter your new password (min 6 characters)"
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                />
                            </div>

                            {/* Confirm New Password */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-1 text-[16px] font-medium font-sans text-foreground"
                                >
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={passwordData.confirmPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Confirm your new password"
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                />
                            </div>
                            <div>
                                <Button onClick={handleChangePassword} disabled={loading} className='bg-secondary px-4 py-2'>
                                    {loading ? 'Changing...' : 'Change Password'}
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
                         <Button onClick={() => setShowDeleteModal(true)} className='bg-red-500 hover:bg-red-600 text-white font-sans rounded-md'>Delete Account</Button>
                         </div>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
                <DialogContent className="bg-white">
                    <DialogHeader>
                        <DialogTitle>Delete Account</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete your account? This action cannot be undone. All your reviews, saved nurseries, and personal data will be permanently deleted.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowDeleteModal(false)} disabled={deleteLoading}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={handleDeleteAccount} disabled={deleteLoading}>
                            {deleteLoading ? 'Deleting...' : 'Delete Account'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AccountsSetting
