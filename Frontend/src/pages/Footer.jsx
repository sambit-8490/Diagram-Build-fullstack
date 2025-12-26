import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#471953] text-white py-10">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get started</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
                        <li><a href="#" className="hover:text-gray-400">Individual</a></li>
                        <li><a href="#" className="hover:text-gray-400">Team</a></li>
                        <li><a href="#" className="hover:text-gray-400">Enterprise</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact sales</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Product</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-400">EntityCraft overview</a></li>
                        <li><a href="#" className="hover:text-gray-400">EntityCraft</a></li>
                        <li><a href="#" className="hover:text-gray-400">Integrations</a></li>
                        <li><a href="#" className="hover:text-gray-400">Security</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-400">Training labs</a></li>
                        <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                        <li><a href="#" className="hover:text-gray-400">Webinars</a></li>
                        <li><a href="#" className="hover:text-gray-400">Help center</a></li>
                        <li><a href="#" className="hover:text-gray-400">Case studies</a></li>
                        <li><a href="#" className="hover:text-gray-400">Diagrams</a></li>
                        <li><a href="#" className="hover:text-gray-400">User community</a></li>
                        <li><a href="#" className="hover:text-gray-400">Newsletter</a></li>
                        <li><a href="#" className="hover:text-gray-400">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-400">About us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Leadership</a></li>
                        <li><a href="#" className="hover:text-gray-400">Newsroom</a></li>
                        <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                        <li><a href="#" className="hover:text-gray-400">Accessibility</a></li>
                        <li><a href="#" className="hover:text-gray-400">Mission</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-gray-400">
                <div className="text-sm mb-4 md:mb-0">© 2024 EntityCraft Software Inc.</div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Legal</a>
                    <a href="#" className="hover:text-white">Cookie privacy choices</a>
                    <a href="#" className="hover:text-white">Cookie policy</a>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">LinkedIn</a>
                    <a href="#" className="hover:text-white">Twitter</a>
                    <a href="#" className="hover:text-white">Instagram</a>
                    <a href="#" className="hover:text-white">YouTube</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer