import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaBars,
  FaBolt,
  FaChevronRight,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

import { ChevronDown } from "lucide-react";

import logo from "../../../assets/rainbow-logo.png";

import {
  categories as productCategories,
  services as serviceCategories,
} from "../../../data.js";

import { useCart } from "../../../context/CartContext";

import styles from "./Header.module.css";

/* =========================================================
   MAIN NAVIGATION
========================================================= */

const links = [
  ["/", "Home", true],
  ["/about", "About"],
  ["/products", "Products"],
  ["/services", "Services"],
  ["/projects", "Projects"],
  ["/contact", "Contact"],
];

/* =========================================================
   DATA HELPERS
========================================================= */

function getItemName(item) {
  if (typeof item === "string") {
    return item;
  }

  return (
    item?.name ||
    item?.title ||
    item?.label ||
    item?.category ||
    "Item"
  );
}

function getItemPath(item, basePath) {
  if (typeof item === "string") {
    return `${basePath}/${item
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")}`;
  }

  if (item?.path) {
    return item.path.startsWith("/")
      ? item.path
      : `${basePath}/${item.path}`;
  }

  if (item?.slug) {
    return `${basePath}/${item.slug}`;
  }

  return basePath;
}

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  /* -------------------------------------------------------
     DESKTOP DROPDOWNS
  ------------------------------------------------------- */

  const [productsOpen, setProductsOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);

  /* -------------------------------------------------------
     MOBILE MENU
  ------------------------------------------------------- */

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileProductsOpen, setMobileProductsOpen] =
    useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  /* -------------------------------------------------------
     REFS
  ------------------------------------------------------- */

  const productsRef = useRef(null);

  const servicesRef = useRef(null);

  /* -------------------------------------------------------
     CART
  ------------------------------------------------------- */

  const { count } = useCart();

  /* =======================================================
     CLOSE DESKTOP DROPDOWNS WHEN CLICKING OUTSIDE
  ======================================================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const clickedProducts =
        productsRef.current?.contains(event.target);

      const clickedServices =
        servicesRef.current?.contains(event.target);

      if (!clickedProducts && !clickedServices) {
        setProductsOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key !== "Escape") {
        return;
      }

      setProductsOpen(false);
      setServicesOpen(false);

      setMobileOpen(false);

      setMobileProductsOpen(false);
      setMobileServicesOpen(false);
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =======================================================
     BODY SCROLL LOCK ON MOBILE
  ======================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("rainbow-menu-open");
    } else {
      document.body.classList.remove(
        "rainbow-menu-open"
      );
    }

    return () => {
      document.body.classList.remove(
        "rainbow-menu-open"
      );
    };
  }, [mobileOpen]);

  /* =======================================================
     CLOSE ALL MENUS
  ======================================================= */

  const closeMenus = () => {
    setProductsOpen(false);
    setServicesOpen(false);

    setMobileOpen(false);

    setMobileProductsOpen(false);
    setMobileServicesOpen(false);
  };

  /* =======================================================
     MOBILE MENU TOGGLE
  ======================================================= */

  const toggleMobileMenu = () => {
    setMobileOpen((current) => !current);

    setProductsOpen(false);
    setServicesOpen(false);
  };

  /* =======================================================
     PRODUCTS DESKTOP TOGGLE
  ======================================================= */

  const toggleProducts = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setProductsOpen((current) => !current);

    setServicesOpen(false);
  };

  /* =======================================================
     SERVICES DESKTOP TOGGLE
  ======================================================= */

  const toggleServices = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setServicesOpen((current) => !current);

    setProductsOpen(false);
  };

  /* =======================================================
     MOBILE PRODUCTS
  ======================================================= */

  const toggleMobileProducts = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setMobileProductsOpen(
      (current) => !current
    );

    setMobileServicesOpen(false);
  };

  /* =======================================================
     MOBILE SERVICES
  ======================================================= */

  const toggleMobileServices = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setMobileServicesOpen(
      (current) => !current
    );

    setMobileProductsOpen(false);
  };

  return (
    <header className={styles.header}>

      {/* ===================================================
          TOP BAR
      =================================================== */}

      <div className={styles.topBar}>
        <div className={styles.topInner}>

          <div className={styles.topLeft}>
            <span>Power backup</span>

            <i />

            <span>Electrical panels</span>

            <i />

            <span>Automation</span>

            <i />

            <span>Solar</span>
          </div>

          <div className={styles.topRight}>
            <span>Direct enquiry</span>

            <i />

            <span>No payment required</span>
          </div>

        </div>
      </div>

      {/* ===================================================
          MAIN NAVIGATION
      =================================================== */}

      <div className={styles.navbar}>
        <div className={styles.inner}>

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className={styles.logo}
            onClick={closeMenus}
            aria-label="Rainbow Home"
          >
            <img
              src={logo}
              alt="Rainbow"
            />
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <nav
            className={styles.desktopNav}
            aria-label="Main navigation"
          >

            {links.map(
              ([to, label, end]) => {

                /* ===========================================
                   PRODUCTS
                ============================================ */

                if (label === "Products") {
                  return (
                    <div
                      key={to}
                      ref={productsRef}
                      className={styles.productNav}
                      onMouseEnter={() => {
                        setProductsOpen(true);
                        setServicesOpen(false);
                      }}
                      onMouseLeave={() => {
                        setProductsOpen(false);
                      }}
                    >

                      <div
                        className={
                          styles.productTrigger
                        }
                      >

                        <NavLink
                          to="/products"
                          className={({ isActive }) =>
                            isActive
                              ? `${styles.navLink} ${styles.active}`
                              : styles.navLink
                          }
                          onClick={() => {
                            setProductsOpen(false);
                            setServicesOpen(false);
                          }}
                        >
                          Products
                        </NavLink>

                        <button
                          type="button"
                          className={
                            productsOpen
                              ? `${styles.dropdownToggle} ${styles.dropdownToggleOpen}`
                              : styles.dropdownToggle
                          }
                          onClick={toggleProducts}
                          aria-label="Toggle products menu"
                          aria-expanded={
                            productsOpen
                          }
                        >
                          <ChevronDown
                            size={13}
                          />
                        </button>

                      </div>

                      {/* PRODUCT DROPDOWN */}

                      <div
                        className={
                          productsOpen
                            ? `${styles.dropdown} ${styles.dropdownOpen}`
                            : styles.dropdown
                        }
                      >

                        <div
                          className={
                            styles.dropdownHeader
                          }
                        >

                          <div
                            className={
                              styles.dropdownIcon
                            }
                          >
                            <FaBolt />
                          </div>

                          <div>
                            <strong>
                              Electrical Products
                            </strong>

                            <span>
                              Power, protection & control
                            </span>
                          </div>

                        </div>

                        <div
                          className={
                            styles.categoryGrid
                          }
                        >

                          {productCategories?.map(
                            (
                              category,
                              index
                            ) => {

                              const name =
                                getItemName(
                                  category
                                );

                              const path =
                                getItemPath(
                                  category,
                                  "/products"
                                );

                              return (
                                <Link
                                  key={`${name}-${index}`}
                                  to={path}
                                  className={
                                    styles.dropdownItem
                                  }
                                  onClick={
                                    closeMenus
                                  }
                                >
                                  <span>
                                    {name}
                                  </span>

                                  <FaChevronRight
                                    size={8}
                                  />
                                </Link>
                              );
                            }
                          )}

                        </div>

                        <Link
                          to="/products"
                          className={
                            styles.dropdownFooter
                          }
                          onClick={closeMenus}
                        >
                          <span>
                            View all products
                          </span>

                          <FaChevronRight
                            size={9}
                          />
                        </Link>

                      </div>
                    </div>
                  );
                }

                /* ===========================================
                   SERVICES
                ============================================ */

                if (label === "Services") {
                  return (
                    <div
                      key={to}
                      ref={servicesRef}
                      className={styles.serviceNav}
                      onMouseEnter={() => {
                        setServicesOpen(true);
                        setProductsOpen(false);
                      }}
                      onMouseLeave={() => {
                        setServicesOpen(false);
                      }}
                    >

                      <div
                        className={
                          styles.serviceTrigger
                        }
                      >

                        <NavLink
                          to="/services"
                          className={({ isActive }) =>
                            isActive
                              ? `${styles.navLink} ${styles.active}`
                              : styles.navLink
                          }
                          onClick={() => {
                            setServicesOpen(false);
                            setProductsOpen(false);
                          }}
                        >
                          Services
                        </NavLink>

                        <button
                          type="button"
                          className={
                            servicesOpen
                              ? `${styles.dropdownToggle} ${styles.dropdownToggleOpen}`
                              : styles.dropdownToggle
                          }
                          onClick={toggleServices}
                          aria-label="Toggle services menu"
                          aria-expanded={
                            servicesOpen
                          }
                        >
                          <ChevronDown
                            size={13}
                          />
                        </button>

                      </div>

                      {/* SERVICES DROPDOWN */}

                      <div
                        className={
                          servicesOpen
                            ? `${styles.dropdown} ${styles.dropdownOpen}`
                            : styles.dropdown
                        }
                      >

                        <div
                          className={
                            styles.dropdownHeader
                          }
                        >

                          <div
                            className={
                              styles.dropdownIcon
                            }
                          >
                            <FaBolt />
                          </div>

                          <div>
                            <strong>
                              Electrical Services
                            </strong>

                            <span>
                              Installation, maintenance & engineering
                            </span>
                          </div>

                        </div>

                        <div
                          className={
                            styles.categoryGrid
                          }
                        >

                          {serviceCategories?.map(
                            (
                              service,
                              index
                            ) => {

                              const name =
                                getItemName(
                                  service
                                );

                              const path =
                                getItemPath(
                                  service,
                                  "/services"
                                );

                              return (
                                <Link
                                  key={`${name}-${index}`}
                                  to={path}
                                  className={
                                    styles.dropdownItem
                                  }
                                  onClick={
                                    closeMenus
                                  }
                                >
                                  <span>
                                    {name}
                                  </span>

                                  <FaChevronRight
                                    size={8}
                                  />
                                </Link>
                              );
                            }
                          )}

                        </div>

                        <Link
                          to="/services"
                          className={
                            styles.dropdownFooter
                          }
                          onClick={closeMenus}
                        >
                          <span>
                            Explore all services
                          </span>

                          <FaChevronRight
                            size={9}
                          />
                        </Link>

                      </div>
                    </div>
                  );
                }

                /* ===========================================
                   NORMAL NAVIGATION LINK
                ============================================ */

                return (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    onClick={closeMenus}
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navLink} ${styles.active}`
                        : styles.navLink
                    }
                  >
                    {label}
                  </NavLink>
                );
              }
            )}

          </nav>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className={styles.actions}>

            {/* CART */}

            <Link
              to="/cart"
              className={styles.cart}
              onClick={closeMenus}
              aria-label="Enquiry Cart"
            >
              <FaShoppingCart />

              {count > 0 && (
                <span
                  className={
                    styles.cartCount
                  }
                >
                  {count > 99
                    ? "99+"
                    : count}
                </span>
              )}
            </Link>

            {/* QUOTE */}

            <Link
              to="/contact"
              className={styles.quote}
              onClick={closeMenus}
            >
              <span>
                Get a Quote
              </span>

              <FaChevronRight
                size={9}
              />
            </Link>

            {/* MOBILE MENU */}

            <button
              type="button"
              className={
                mobileOpen
                  ? `${styles.menu} ${styles.menuOpen}`
                  : styles.menu
              }
              onClick={toggleMobileMenu}
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
            >
              <span
                className={
                  styles.menuIcon
                }
              >
                {mobileOpen ? (
                  <FaTimes />
                ) : (
                  <FaBars />
                )}
              </span>
            </button>

          </div>

        </div>
      </div>

      {/* ===================================================
          MOBILE NAVIGATION
      =================================================== */}

      <div
        className={
          mobileOpen
            ? `${styles.mobilePanel} ${styles.mobilePanelOpen}`
            : styles.mobilePanel
        }
      >

        <div
          className={
            styles.mobileInner
          }
        >

          {/* MOBILE BRAND */}

          <div
            className={
              styles.mobileBrand
            }
          >

            <div
              className={
                styles.mobileBrandIcon
              }
            >
              <FaBolt />
            </div>

            <div>
              <strong>
                Rainbow Electrical
              </strong>

              <span>
                Power • Panels • Automation • Solar
              </span>
            </div>

          </div>

          {/* MOBILE NAV ITEMS */}

          <div
            className={
              styles.mobileLinks
            }
          >

            {/* HOME */}

            <NavLink
              to="/"
              end
              onClick={closeMenus}
              className={({ isActive }) =>
                isActive
                  ? `${styles.mobileLink} ${styles.mobileActive}`
                  : styles.mobileLink
              }
            >
              <span>
                Home
              </span>

              <FaChevronRight
                size={10}
              />
            </NavLink>

            {/* ABOUT */}

            <NavLink
              to="/about"
              onClick={closeMenus}
              className={({ isActive }) =>
                isActive
                  ? `${styles.mobileLink} ${styles.mobileActive}`
                  : styles.mobileLink
              }
            >
              <span>
                About
              </span>

              <FaChevronRight
                size={10}
              />
            </NavLink>

            {/* =================================================
                MOBILE PRODUCTS
            ================================================== */}

            <div
              className={
                styles.mobileAccordion
              }
            >

              <button
                type="button"
                className={
                  mobileProductsOpen
                    ? `${styles.mobileAccordionButton} ${styles.mobileAccordionActive}`
                    : styles.mobileAccordionButton
                }
                onClick={
                  toggleMobileProducts
                }
                aria-expanded={
                  mobileProductsOpen
                }
              >

                <span>
                  Products
                </span>

                <ChevronDown
                  size={17}
                  className={
                    mobileProductsOpen
                      ? styles.arrowRotated
                      : ""
                  }
                />

              </button>

              <div
                className={
                  mobileProductsOpen
                    ? `${styles.mobileSubmenu} ${styles.mobileSubmenuOpen}`
                    : styles.mobileSubmenu
                }
              >

                {productCategories?.map(
                  (
                    category,
                    index
                  ) => {

                    const name =
                      getItemName(
                        category
                      );

                    const path =
                      getItemPath(
                        category,
                        "/products"
                      );

                    return (
                      <Link
                        key={`${name}-${index}`}
                        to={path}
                        onClick={closeMenus}
                        className={
                          styles.mobileSubLink
                        }
                      >
                        <span>
                          {name}
                        </span>

                        <FaChevronRight
                          size={8}
                        />
                      </Link>
                    );
                  }
                )}

                <Link
                  to="/products"
                  onClick={closeMenus}
                  className={
                    styles.mobileViewAll
                  }
                >
                  <span>
                    View all products
                  </span>

                  <FaChevronRight
                    size={9}
                  />
                </Link>

              </div>

            </div>

            {/* =================================================
                MOBILE SERVICES
            ================================================== */}

            <div
              className={
                styles.mobileAccordion
              }
            >

              <button
                type="button"
                className={
                  mobileServicesOpen
                    ? `${styles.mobileAccordionButton} ${styles.mobileAccordionActive}`
                    : styles.mobileAccordionButton
                }
                onClick={
                  toggleMobileServices
                }
                aria-expanded={
                  mobileServicesOpen
                }
              >

                <span>
                  Services
                </span>

                <ChevronDown
                  size={17}
                  className={
                    mobileServicesOpen
                      ? styles.arrowRotated
                      : ""
                  }
                />

              </button>

              <div
                className={
                  mobileServicesOpen
                    ? `${styles.mobileSubmenu} ${styles.mobileSubmenuOpen}`
                    : styles.mobileSubmenu
                }
              >

                {serviceCategories?.map(
                  (
                    service,
                    index
                  ) => {

                    const name =
                      getItemName(
                        service
                      );

                    const path =
                      getItemPath(
                        service,
                        "/services"
                      );

                    return (
                      <Link
                        key={`${name}-${index}`}
                        to={path}
                        onClick={closeMenus}
                        className={
                          styles.mobileSubLink
                        }
                      >
                        <span>
                          {name}
                        </span>

                        <FaChevronRight
                          size={8}
                        />
                      </Link>
                    );
                  }
                )}

                <Link
                  to="/services"
                  onClick={closeMenus}
                  className={
                    styles.mobileViewAll
                  }
                >
                  <span>
                    Explore all services
                  </span>

                  <FaChevronRight
                    size={9}
                  />
                </Link>

              </div>

            </div>

            {/* PROJECTS */}

            <NavLink
              to="/projects"
              onClick={closeMenus}
              className={({ isActive }) =>
                isActive
                  ? `${styles.mobileLink} ${styles.mobileActive}`
                  : styles.mobileLink
              }
            >
              <span>
                Projects
              </span>

              <FaChevronRight
                size={10}
              />
            </NavLink>

            {/* CONTACT */}

            <NavLink
              to="/contact"
              onClick={closeMenus}
              className={({ isActive }) =>
                isActive
                  ? `${styles.mobileLink} ${styles.mobileActive}`
                  : styles.mobileLink
              }
            >
              <span>
                Contact
              </span>

              <FaChevronRight
                size={10}
              />
            </NavLink>

          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================== */}

          <div
            className={
              styles.mobileActions
            }
          >

            <Link
              to="/cart"
              className={
                styles.mobileCart
              }
              onClick={closeMenus}
            >
              <FaShoppingCart />

              <span>
                Enquiry Cart
              </span>

              {count > 0 && (
                <b>
                  {count > 99
                    ? "99+"
                    : count}
                </b>
              )}
            </Link>

            <Link
              to="/contact"
              className={
                styles.mobileQuote
              }
              onClick={closeMenus}
            >
              <span>
                Get a Quote
              </span>

              <FaChevronRight
                size={10}
              />
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
}