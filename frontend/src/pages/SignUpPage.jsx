import React from 'react'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import { EyeOff, Eye, Loader2, Globe } from 'lucide-react'
import toast from 'react-hot-toast'

const SignUpPage = () => {
  const { authUser } = useAuthStore();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const {signup, isSigningUp} = useAuthStore();

    const validateForm = () => { 
        if(!formData.fullName.trim()) {
            toast.error("Full name is required");
            return false;
        }
        if(!formData.email.trim()) {
            toast.error("Email is required");
            return false;
        }
        if(!formData.password) {
            toast.error("Password is required");
            return false;
        }
        if(formData.password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return false;
        }
        if(!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error("Invalid email format");
            return false;
        }
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();                 

        const success = validateForm();
        if (success !== true) return;
        const result = await signup(formData);
        if (result === true) {
            navigate('/login');
        }
    }
  const [activeTab, setActiveTab] = useState('signup');

  return (
    <div className='grid lg:grid-cols-2 min-h-screen overflow-hidden'>
        {/* Left side with image */}
        <div className='hidden lg:block relative'>
          <img src="/register_image.png" alt="The Digital Boutique" className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-black/30 flex flex-col justify-end p-12'>
            <h2 className='text-4xl font-bold text-white mb-2'>The Digital Boutique</h2>
            <p className='text-white/90 text-lg'>Exclusivity, craftsmanship, and a seamless shopping experience for the discerning audience.</p>
          </div>
        </div>

        {/* Right side with form */}
        <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
            <div className='w-full max-w-md space-y-5'>
                {/* logo)*/}
                <div className='text-center'>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='size-22 bg-primary/10 rounded-lg p-2 flex items-center justify-center'>
                           <img src="HCV_Logo.png" alt="HCV" className='size-20' />
                        </div>
                        <h1 className='text-2xl font-bold mt-2'>HCV Fashion Hub</h1>
                        <p className='text-base-content/60'>CURATED LUXURY</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className='flex gap-8 border-b border-gray-200 justify-center'>
                  <Link to="/login"
                    className={`pb-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                      activeTab === 'signup' 
                        ? 'text-gray-400 hover:text-gray-600'
                        : 'text-black border-b-2 border-black' 
                    }`}
                  >
                    Log In
                  </Link>
                  <button 
                    onClick={() => setActiveTab('signup')}
                    className={`pb-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                      activeTab === 'signup' 
                        ? 'text-black border-b-2 border-black' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    {/* Full Name Field */}
                    <div>
                      <label className='block text-xs font-medium uppercase tracking-wider mb-2'>
                        Full Name
                      </label>
                      <input  
                        type="text"
                        className='w-full border-b border-gray-600 pb-2 focus:outline-none transition-colors placeholder-gray-600'
                        placeholder='John Doe'
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})} 
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className='block text-xs font-medium uppercase tracking-wider mb-2'>
                        Email Address
                      </label>
                      <input  
                        type="email"
                        className='w-full border-b border-gray-600 pb-2 focus:border-black focus:outline-none transition-colors placeholder-gray-600'
                        placeholder='name@example.com'
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      />
                    </div>

                    {/* Password Field */}
                    <div>
                      <label className='block text-xs font-medium uppercase tracking-wider mb-2'>
                        Password
                      </label>
                      <div className='relative'>
                        <input  
                          type={showPassword ? "text" : "password"}
                          className='w-full border-b border-gray-600 pb-2 focus:border-black focus:outline-none transition-colors placeholder-gray-600'
                          placeholder='••••••••'
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})} 
                        />
                        <button 
                          type="button" 
                          className='absolute right-0 bottom-2 text-gray-600 hover:text-black'
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? 
                            <EyeOff className='size-5'/>
                            :
                            <Eye className='size-5'/>
                          }
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      className='w-full bg-black text-white py-3 uppercase tracking-wider font-semibold hover:bg-gray-900 transition-colors mt-8 disabled:opacity-50'
                      disabled={isSigningUp}
                    >
                      {isSigningUp ? (
                        <>
                          <Loader2 className='size-5 animate-spin inline mr-2' /> 
                          Loading...
                        </>
                      ) : (
                        'Create Account'
                      )}
                    </button>
                </form>

                {/* Social Login */}                                                                                                                                                                
                <div className='space-y-4'>
                  <div className='relative flex items-center'>
                    <div className='grow border-t border-gray-300'></div>
                    <span className='px-3 text-xs text-gray-500 uppercase tracking-wider'>Or continue with</span>
                    <div className='grow border-t border-gray-300'></div>
                  </div>

                  <div className='grid grid-cols-2 gap-3'>
                    <button type="button" className='border border-gray-300 py-3 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm font-medium'>
                      <Globe className='size-5' />
                      Google
                    </button>
                    <button type="button" className='border border-gray-300 py-3 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm font-medium'>
                      <Globe className='size-5' />
                      Apple ID
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className='text-center pt-4'>
                  <p className='text-xs text-gray-600'>
                    By accessing HCV Fashion Hub, you agree to our <a href="#" className='hover:underline'>Terms of Luxury & Privacy Standards</a>
                  </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SignUpPage