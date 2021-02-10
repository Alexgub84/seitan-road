import React from "react";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo"></div>
      <div className="footer-contact">
        <h4>דברו איתנו</h4>
        <a href="tel:+9720545690088">054-569-0088</a>{" "}
        <a href="mailto:ayakahila89@gmail.com">ayakahila89@gmail.com</a>
      </div>
      <div className="footer-credit">
        <div>כל הזכויות שמורות © 2021 - דרך הסייטן</div>
        <div>עיצוב ובניית אתר - כפיר פוקס, אלכס גוברמן, לירון-ענבל פרסי</div>
      </div>
    </div>
  );
}
