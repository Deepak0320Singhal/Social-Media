import React from 'react'

function Footer() {
    return (
        <div className="container  ">
            <footer className="py-3 my-4 ">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item text-white "><a href="#" className="nav-link px-2 text-white text-body">Home</a></li>
                    <li className="nav-item text-white "><a href="#" className="nav-link px-2 text-white text-body">Features</a></li>
                    <li className="nav-item text-white "><a href="#" className="nav-link px-2 text-white text-body">Pricing</a></li>
                    <li className="nav-item text-white "><a href="#" className="nav-link px-2 text-white text-body">FAQs</a></li>
                    <li className="nav-item text-white "><a href="#" className="nav-link px-2 text-body">About</a></li>
                </ul>
                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 ">
                    <p>© 2024 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer