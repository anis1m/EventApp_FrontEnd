import React, { useRef, useState } from "react";
import "./ContactUs.css";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Link } from "react-router-dom";

function ContactUs() {
  const accordion = useRef([]);
  const angleupdown = useRef([]);
  const [current, setCurrent] = useState("Attending");

  function showhideaccordion(index, isOpen) {
    if (!isOpen) {
      accordion.current[index].style.display = "none";
      angleupdown.current[index].classList.remove("fa-angle-up");
      angleupdown.current[index].classList.add("fa-angle-down");
    } else {
      accordion.current[index].style.display = "flex";
      angleupdown.current[index].classList.remove("fa-angle-down");
      angleupdown.current[index].classList.add("fa-angle-up");
    }
  }
  return (
    <>
      <section className="contactUs">
        <section className="contactUsInside">
          <blockquote>
            <i
              class="fa-solid fa-angle-left"
              style={{ marginRight: "0.5rem", color: "blue" }}
            ></i>
            <a href="/manage-my-events/help" style={{ color: "blue" }}>
              Help Center
            </a>
          </blockquote>
          <h1>Contact us</h1>
          <div className="contactUsInfo">
            <i class="fa-solid fa-circle-info"></i>
            <aside>
              <h4>Your support options</h4>
              <p>
                It looks like you attend events. For help, you can find answers
                to common issues on this page. Email support is available for
                some issues.
              </p>
            </aside>
          </div>
          <section className="insideContactUs">
            <h1>Common issues and questions</h1>
            <aside id="togglebetweencontactoptions">
              <blockquote onClick={() => setCurrent("Attending")}>
                <h4>Attending an event</h4>
                {current === "Attending" ? <hr /> : <></>}
              </blockquote>
              <blockquote onClick={() => setCurrent("Organizing")}>
                <h4>Organizing an event</h4>
                {current === "Organizing" ? <hr /> : <></>}
              </blockquote>
              <blockquote onClick={() => setCurrent("Something")}>
                <h4>Something else</h4>
                {current === "Something" ? <hr /> : <></>}
              </blockquote>
            </aside>
            {current === "Attending" && (
              <div>
                <h2>Tickets and event info</h2>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        0,
                        angleupdown.current[0].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I can't find my tickets</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[0] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[0] = el)}>
                    <p>
                      Check your EventDTL account: Log in and go to Tickets. You
                      can also access your tickets in the EventDTL app.
                    </p>
                    <p>
                      You might not have a password yet. When you order tickets
                      on EventDTL, an account is created for you. To verify your
                      email and access your tickets:
                    </p>
                    <ol>
                      <li>
                        Go to <a>Reset your password.</a>
                      </li>
                      <li>
                        Enter the email address you used to order tickets and
                        select <strong>Reset password.</strong>
                      </li>
                      <li>
                        Check your email inbox for an email with the subject
                        line “Reset your EventDTL password.” It might be in your
                        spam folder.
                      </li>
                      <li>
                        Open the email and select{" "}
                        <strong>Set a new password.</strong>
                      </li>
                      <li>
                        Enter your chosen password and select{" "}
                        <strong>Update password.</strong>
                      </li>
                      <li>
                        Your tickets should appear under <a>Orders.</a>
                      </li>
                    </ol>
                    <p>
                      If you still can’t find your tickets or can’t log in,
                      contact the event organizer for help.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Find your tickets <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        1,
                        angleupdown.current[1].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>How do I get a refund?</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[1] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[1] = el)}>
                    <p>
                      Events on EventDTL are hosted by third-party organizers
                      who set their own refund policies. If refund requests are
                      allowed by the event organizer, you can request one in
                      your account:
                    </p>

                    <ol>
                      <li>
                        <a>Log in</a> and go to Tickets.
                      </li>
                      <li>
                        Find the order you want refunded, then select{" "}
                        <strong>Request a refund.</strong>
                      </li>
                      <li>
                        Enter your details and submit your request. The
                        organizer should respond within five business days.
                      </li>
                    </ol>
                    <p>
                      Select <strong>Contact the organizer</strong> if you don’t
                      have the option to request a refund, or if you have a
                      question about the status of your refund request.
                    </p>
                    <p>Contact EventDTL for help if all of these apply:</p>
                    <ul>
                      <li>
                        The event was cancelled (not postponed) within the last
                        45 days.
                      </li>
                      <li>
                        You contacted the organizer, but they didn't respond or
                        they denied your request.
                      </li>
                      <li>
                        The organizer used EventDTL Payment Processing to
                        process your payment.
                      </li>
                    </ul>
                    <h5>Related articles</h5>
                    <a>
                      Request a refund <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <p>
                      Still have questions? <a>Contact support.</a>
                    </p>
                  </article>
                </aside>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        2,
                        angleupdown.current[2].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I have a question about an event</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[2] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[2] = el)}>
                    <p>
                      The organizer may have provided the answer in their event
                      listing. If not, you’ll need to contact them directly:
                    </p>
                    <ul>
                      <li>
                        If you have a ticket: Go to <strong>Tickets</strong> in
                        your EventDTL account. Select your order, then select{" "}
                        <strong>Contact the organizer.</strong>
                      </li>
                      <li>
                        If you don’t have a ticket yet: Go to the event listing
                        and select <strong>Contact.</strong>
                      </li>
                    </ul>
                    <p>
                      EventDTL can't answer questions about an event on the
                      organizer's behalf.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Contact the event organizer{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
                <h2>Payment and charges</h2>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        3,
                        angleupdown.current[3].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I was charged twice for the same order</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[3] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[3] = el)}>
                    <p>
                      If a duplicate charge appears on your statement, it’s
                      likely due to a declined purchase. Declined charges may
                      show as pending but should disappear within 5-7 business
                      days. If they don't, contact us for help.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Duplicate/Pending Charges{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <p>
                      Still have questions? <a>Contact support</a>
                    </p>
                  </article>
                </aside>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        4,
                        angleupdown.current[4].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I don't recognize a charge on my card</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[4] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[4] = el)}>
                    <p>
                      If you have an EventDTL charge on your statement, it’s
                      likely related to tickets for an event. Your statement
                      will show “Pune” as the location—that’s where EventDTL’s
                      headquarters is located.
                    </p>
                    <p>
                      Check if someone you know has used your card recently to
                      buy tickets on EventDTL. If no one has, contact us for
                      help.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      What is this charge from EventDTL?{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <p>
                      Still have questions? <a>Contact support.</a>
                    </p>
                  </article>
                </aside>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        5,
                        angleupdown.current[5].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>My ticket refund was issued to a closed account</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[5] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[5] = el)}>
                    <p>
                      EventDTL can’t reverse refunds for ticket purchases or
                      reissue them to a different card or account.
                    </p>
                    <p>
                      However, your bank or credit card company may choose to
                      either transfer the refund to an open account or issue you
                      a check.
                    </p>
                    <p>
                      For questions about this process, it’s best to contact
                      your bank. If they're unable to locate your ticket refund,
                      they may ask for an Acquired Reference Number (ARN).{" "}
                      <a>Check if your order qualifies for an ARN.</a>
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Track your refund <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <p>Still have questions? Contact support</p>
                  </article>
                </aside>
                <h2>Account</h2>
                <aside style={{ border: "none" }}>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        6,
                        angleupdown.current[6].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I can't log in</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[6] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[6] = el)}>
                    <p>To reset your password:</p>
                    <ol>
                      <li>
                        Go to <a>Reset your password.</a>
                      </li>
                      <li>Enter your email address.</li>
                      <li>
                        Select Reset password. Password reset emails come from
                        noreply@order.eventdtl.com and have the subject line,
                        "Reset your EventDTL password."
                      </li>
                    </ol>
                    <p>Contact EventDTL if:</p>
                    <ul>
                      <li>You don't receive the password reset email.</li>
                      <li>The email you used to register had a typo.</li>
                      <li>
                        You can't access the email inbox associated with your
                        account.
                      </li>
                      <li>
                        There’s an account associated with your email that you
                        didn't create.
                      </li>
                    </ul>
                    <p>
                      If your account is suspended, follow the instructions in
                      the email you received from EventDTL.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Reset your password{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <p>
                      Still have questions? <a>Contact support.</a>
                    </p>
                  </article>
                </aside>
              </div>
            )}
            {current === "Organizing" && (
              <div>
                <h2>Finance</h2>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        7,
                        angleupdown.current[7].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>Where's my payout?</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[7] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[7] = el)}>
                    <p>
                      EventDTL sends your payout three days after your event
                      unless you request an Instant Payout or set a custom
                      payout schedule. Once we send your payout, your bank’s
                      processing time determines when the money will arrive in
                      your account.
                    </p>
                    <p>
                      To check your payout status, go to{" "}
                      <strong>Finance.</strong>
                    </p>
                    <p>
                      If you choose to get your payout by check, your check will
                      arrive in the mail within 10 business days after it
                      appears as “Sent.” If your check is lost, contact us for
                      help.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Getting your event payout{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      Delayed or missing payouts{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        8,
                        angleupdown.current[8].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I need to issue a refund</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[8] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[8] = el)}>
                    <p>
                      You should respond to all refund requests within five
                      business days.
                    </p>
                    <p>To issue a refund:</p>
                    <ul>
                      <li>
                        Full refund: Find the order in <strong>Orders.</strong>{" "}
                        Select the three-dot icon and{" "}
                        <strong>View order,</strong> then select{" "}
                        <strong>Refund.</strong>
                      </li>
                      <li>
                        Partial refund: Deny any pending refund requests, then
                        manually enter the refund amount.
                      </li>
                    </ul>
                    <p>
                      If someone hasn’t received their refund, tell them to
                      check their refund confirmation email— it includes more
                      details and explains what to do if they haven’t received
                      their refund within 10 business days.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Issue a full or partial refund{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      Understanding ticket refunds on EventDTL{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        9,
                        angleupdown.current[9].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I have a tax question</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[9] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[9] = el)}>
                    <p>
                      Consult a tax professional if you’re not sure what your
                      tax obligations are. EventDTL can’t give tax advice.
                    </p>
                    <p>
                      If EventDTL requests your tax information, you must
                      provide it, or EventDTL may hold your payouts. EventDTL is
                      required to collect tax information for all paid events
                      that meet certain requirements. This is still true for
                      events that aren’t for profit or are organized by
                      nonprofits.
                    </p>
                    <p>
                      U.S. organizations that are exempt from federal, state,
                      county, and/or local sales taxes may qualify to have sales
                      tax waived.
                    </p>
                    <a>Your guide to taxes on EventDTL</a>
                    <h5>Related articles</h5>
                    <a>
                      Why are you requesting my taxpayer information? (U.S.
                      citizens) <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      Why are you requesting my taxpayer information (non-U.S.
                      citizens) <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        10,
                        angleupdown.current[10].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I want to cancel my subscription</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[10] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[10] = el)}>
                    <p>
                      EventDTL offers several ways to promote events. To cancel:
                    </p>
                    <ul>
                      <li>
                        Marketing tools: Go to <a>Marketing settings</a> and
                        select <strong>Billing</strong> to manage your
                        subscription.
                      </li>
                      <li>
                        EventDTL Ads: There’s no subscription for ad campaigns.
                        To stop a campaign, go to <a>Marketing</a> and select{" "}
                        <strong>EventDTL Ads.</strong> Find the campaign, select
                        the three-dot icon next to it, then select{" "}
                        <strong>Pause campaign </strong>or{" "}
                        <strong>End campaign.</strong>
                      </li>
                    </ul>
                    <p>To manage your Pro or Flex plan:</p>
                    <ul>
                      <li>
                        Pro: Go to <a>Organization settings.</a> Select{" "}
                        <strong>Plan management,</strong> then select{" "}
                        <strong>Manage subscription</strong> or{" "}
                        <strong>Cancel subscription.</strong>
                      </li>
                      <li>
                        Flex: There’s no subscription or recurring charge for
                        this pay-per-event plan. To choose a different plan, go
                        to <a>Organization settings</a> and select{" "}
                        <strong>Plan management.</strong>
                      </li>
                    </ul>
                    <p>
                      EventDTL does not offer refunds for subscriptions per the{" "}
                      <a></a>Organizer Terms, unless required by law.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      EventDTL's pricing plans{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      EventDTL's Ticketing Fees{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      Is the Ticketing Fee refundable?{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
                <h2>Manage my events</h2>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        11,
                        angleupdown.current[11].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I need to postpone and reschedule an event</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[11] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[11] = el)}>
                    <p>
                      If you don’t have a new date yet, you can delay without
                      announcing a date:
                    </p>
                    <ol>
                      <li>
                        Go to <a>Manage my events</a> and select your event.
                      </li>
                      <li>
                        Select <strong>On sale,</strong> then{" "}
                        <strong>Change status,</strong> then{" "}
                        <strong>Postponed.</strong>
                      </li>
                      <li>
                        Under “Date and time”, pick a placeholder date within 90
                        days of the original date. Uncheck the “Display start
                        time” and “Display end time” boxes to hide the date,
                        then select Save.
                      </li>
                      <li>
                        <a>Email everyone who registered. </a> Share your refund
                        policy and when you'll announce the new date.{" "}
                      </li>
                      <li>
                        Respond to attendee emails and refund requests from
                        those who can no longer attend.
                      </li>
                    </ol>
                    <p>To reschedule:</p>
                    <ol>
                      <li>
                        Go to <a>Manage my events</a> and select your event.
                      </li>
                      <li>
                        Set a new event date and time within 90 days of the
                        original date. Check the “Display start time” and
                        “Display end time” boxes, then select{" "}
                        <strong>Save.</strong>
                      </li>
                      <li>
                        <a>Email everyone who registered. </a>Share the event’s
                        new date and your refund policy.
                      </li>
                      <li>
                        Respond to attendee emails and refund requests from
                        those who can no longer attend.
                      </li>
                    </ol>
                    <p>
                      If the date on your event listing has passed, you can’t
                      edit it or put tickets on sale. Please contact EventDTL if
                      this happens.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Postpone and reschedule your event
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      Cancel your event <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      EventDTL's Postponed Event Policy{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        12,
                        angleupdown.current[12].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I can't find the event I created</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[12] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[12] = el)}>
                    <p>
                      If you can’t find your event to manage it, try these
                      steps:
                    </p>
                    <ul>
                      <li>
                        Try to <a>log in to EventDTL</a> with any other email
                        addresses you use.
                      </li>
                      <li>
                        Log in and select <strong>Manage my events. </strong>{" "}
                        Change the event status filter from “Upcoming events” to
                        “All events.”
                      </li>
                      <li>
                        Search your email inbox and spam folder for a
                        confirmation email from noreply@event.eventdtl.com—it
                        includes a “See on EventDTL” link to your event.
                      </li>
                    </ul>

                    <p>
                      Check if your account is linked to more than one
                      organization: go to <a>Organization settings</a> and
                      select <strong>Switch organization. </strong> You’ll only
                      have this option if you're linked to more than one
                      organization.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Find the event you created{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      Improve your event visibility in EventDTL search{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        13,
                        angleupdown.current[13].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I need to edit one event in an event series</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[13] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[13] = el)}>
                    <p>
                      You can reschedule or delete a single event instance
                      without affecting other events in a series:
                    </p>
                    <ol>
                      <li>
                        Go to <a>Manage my events.</a>
                      </li>
                      <li>
                        Select the event you want to edit to go to the event
                        dashboard.
                      </li>
                      <li>
                        Select <strong>Schedule</strong> and choose the instance
                        you want to change.
                      </li>
                      <li>
                        If the event is live, select “On sale” and change the
                        event status to “Postponed” to reschedule or “Cancelled”
                        to delete.
                      </li>
                      <li>
                        <strong>Save</strong> and continue.
                      </li>
                      <li>Email any attendees impacted by the event change.</li>
                    </ol>
                    <p>
                      You can’t edit the summary, location, or other details for
                      a single event instance.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Change a single date or time in a recurring event schedule
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      Create and manage multiple date or recurring events
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
                <h2>Marketing</h2>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        14,
                        angleupdown.current[14].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I need help with marketing tools</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[14] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[14] = el)}>
                    <p>
                      EventDTL offers several marketing tools to promote your
                      event. These are some common questions about email
                      campaigns and EventDTL Ads.{" "}
                    </p>
                    <h4>Email campaigns</h4>
                    <ul>
                      <li>
                        <strong>How many emails can I send per day?</strong> You
                        can send up to 250 emails per day. In certain countries,
                        you can pay a one-time fee to increase your limit for
                        one campaign. Or subscribe to EventDTL Pro to increase
                        your limit for all campaigns.
                      </li>
                      <li>
                        <strong>How does billing work?</strong> If you're
                        subscribed to EventDTL Pro, you're billed monthly or
                        annually. If you paid a one-time fee to increase your
                        limit (USA only), you’re billed after you send an email
                        campaign.
                      </li>
                      <li>
                        <strong>hy is my campaign stuck “sending?”</strong>W
                        This means EventDTL isn’t done sending all your emails.
                        The campaign’s details should be available once the
                        campaign is fully sent.{" "}
                      </li>
                      <li>
                        <strong>
                          Why haven’t subscribers received my emails?{" "}
                        </strong>{" "}
                        If the email campaign is listed as sent, then the email
                        has been successfully delivered. Recipients should check
                        their spam or promotions folder.{" "}
                      </li>
                    </ul>
                    <h4>EventDTL Ads:</h4>
                    <ul>
                      <li>
                        <strong>How does billing work?</strong> You’ll be
                        charged on the first of the month for the previous
                        month’s ads, starting after your campaign launches.
                      </li>
                      <li>
                        <strong>Is my event eligible?</strong> To run an
                        EventDTL Ad, your event must be public, contain an event
                        image, and take place in an <a>eligible city. </a>
                      </li>
                      <li>
                        <strong>
                          Where can I find the invoice for my campaign?
                        </strong>{" "}
                        Go to <a>Marketing tools.</a> Select{" "}
                        <strong>Settings,</strong> then select{" "}
                        <strong>Invoices. </strong>
                      </li>
                      <h5>Related articles</h5>
                      <a>
                        Promote your event with email campaigns
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                      <a>
                        Requirements for EventDTL Ads{" "}
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                      <a>
                        Manage your EventDTL Ads campaign
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </ul>
                  </article>
                </aside>
                <h2>Account</h2>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        15,
                        angleupdown.current[15].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>
                      I have a question about account ownership or permissions
                    </h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[15] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[15] = el)}>
                    <h4>Account ownership</h4>
                    <p>
                      The owner is the main EventDTL account holder. If
                      transferring ownership, the new owner must use an email
                      address that isn’t associated with an existing EventDTL
                      account.
                    </p>
                    <p>To transfer account ownership:</p>
                    <ul>
                      <li>
                        Log in using the current account owner’s email address.
                      </li>
                      <li>
                        Go to <strong>Change email,</strong> then{" "}
                        <strong>Change.</strong>
                      </li>
                      <li>
                        Enter the email address of the new account owner. Then,
                        enter the current owner’s password to confirm. Select{" "}
                        <strong>Save.</strong>
                      </li>
                    </ul>
                    <p>
                      The new account owner can change the password when they
                      first log in.
                    </p>
                    <p>
                      If you can't log into the owner account or need to dispute
                      ownership, contact us for help.
                    </p>
                    <h4>Account permissions</h4>
                    <p>
                      The account owner and team members in the admin role can
                      determine permissions for other team members to create,
                      edit, or monitor events. Go to{" "}
                      <a>Organization settings</a> to manage roles and
                      permissions.
                    </p>
                    <p>
                      If you don’t have access to manage an event, contact the
                      account owner.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Transfer EventDTL account ownership
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      Manage roles and permissions
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      Permissions Glossary
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        16,
                        angleupdown.current[16].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I can't log in</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[16] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[16] = el)}>
                    <p>To reset your password:</p>
                    <ol>
                      <li>
                        Go to <a>Reset your password.</a>
                      </li>
                      <li>Enter your email address.</li>
                      <li>
                        Select Reset password. Password reset emails come from
                        noreply@order.eventdtl.com and have the subject line,
                        "Reset your EventDTL password."
                      </li>
                    </ol>
                    <p>Contact EventDTL if:</p>
                    <ul>
                      <li>You don't receive the password reset email.</li>
                      <li>The email you used to register had a typo.</li>
                      <li>
                        You can't access the email inbox associated with your
                        account.
                      </li>
                      <li>
                        There’s an account associated with your email that you
                        didn't create.
                      </li>
                    </ul>
                    <p>
                      If your account is suspended, follow the instructions in
                      the email you received from EventDTL.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Reset your password{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a>
                      Reasons your account is suspended{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <p>
                      Still have questions? <a>Contact support.</a>
                    </p>
                  </article>
                </aside>
                <h2>Troubleshooting</h2>
                <aside style={{ border: "none" }}>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        17,
                        angleupdown.current[17].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>Report a site issue or bug</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[17] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[17] = el)}>
                    <p>
                      If you’re having technical issues, make sure your browser
                      is up to date, then try clearing your cache and
                      cookies—you can find this option in your web browser’s
                      settings.
                    </p>
                    <p>If something still isn’t working as expected:</p>
                    <ul>
                      <li>
                        Try a different web browser, such as Google Chrome or
                        Mozilla Firefox.
                      </li>
                      <li>
                        <a>Check EventDTL’s system status </a> to verify if
                        there’s an issue.
                      </li>
                      <li>
                        If you’re a team member of an organization, ask the
                        account owner to verify that your role has the correct
                        permissions set.
                      </li>
                    </ul>
                    <p>
                      If attendees can't order tickets, give them these
                      instructions:
                    </p>
                    <ul>
                      <li>
                        Disable pop-up blockers, which may prevent the payment
                        window from appearing.
                      </li>
                      <li>
                        Scroll to the bottom of the order page. There may be
                        additional questions they must answer to complete the
                        order.
                      </li>
                      <li>Try using a different payment method.</li>
                    </ul>
                    <h5>Related articles</h5>
                    <a>
                      Troubleshooting internet browser issues
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
              </div>
            )}
            {current === "Something" && (
              <div>
                <h2>Payment and charges</h2>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        18,
                        angleupdown.current[18].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I don't recognize a charge on my card</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[18] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[18] = el)}>
                    <p>
                      If you have an EventDTL charge on your statement, it’s
                      likely related to tickets for an event. Your statement
                      will show “Pune” as the location—that’s where EventDTL’s
                      headquarters is located.
                    </p>
                    <p>
                      Check if someone you know has used your card recently to
                      buy tickets on EventDTL. If no one has, contact us for
                      help.
                    </p>
                    <p>
                      For event organizers: If you recently chose to issue a
                      refund, you may have added your card so that EventDTL
                      could charge it. This happens if you don’t have enough
                      money in an upcoming payout to cover the refund. Refund
                      charges are from EventDTL REFUND TO BUYER or EventDTL
                      PAYIN FOR EVENT.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      What is this charge from EventDTL?{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <p>
                      Still have questions? <a>Contact support.</a>
                    </p>
                  </article>
                </aside>
                <h2>Trust and safety</h2>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        19,
                        angleupdown.current[19].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I need to report an event</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[19] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[19] = el)}>
                    <p>
                      To report an event that violates EventDTL’s{" "}
                      <a>Terms of Service</a> or <a>Community Guidelines:</a>
                    </p>
                    <ol>
                      <li>Find the event listing on EventDTL.</li>
                      <li>
                        Select <strong>Report this event</strong> at the bottom
                        of the page and follow the instructions.
                      </li>
                    </ol>
                    <h5>Related articles</h5>
                    <a>
                      How to report an event on EventDTL
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <p>
                      Still have questions? <a>Contact support</a>
                    </p>
                  </article>
                </aside>
                <h2>Account</h2>
                <aside>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        20,
                        angleupdown.current[20].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>I have a data privacy request</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[20] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[20] = el)}>
                    <p>
                      To access, delete, or manage your data, go to the{" "}
                      <a>EventDTL Privacy Center </a> and select{" "}
                      <strong>Take control of your data.</strong>
                    </p>
                    <p>
                      EventDTL takes data privacy seriously and complies with
                      all applicable data privacy law obligations. EventDTL
                      seeks to help event organizers comply with their
                      respective obligations.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      EventDTL & California Data Protection
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
                <aside style={{ border: "none" }}>
                  <blockquote
                    onClick={() =>
                      showhideaccordion(
                        21,
                        angleupdown.current[21].classList.contains(
                          "fa-angle-down"
                        )
                      )
                    }
                  >
                    <h4>How do I delete my account?</h4>
                    <i
                      class="fa-solid fa-angle-down"
                      ref={(el) => (angleupdown.current[21] = el)}
                    ></i>
                  </blockquote>
                  <article ref={(el) => (accordion.current[21] = el)}>
                    <p>To close your EventDTL account:</p>
                    <ol>
                      <li>
                        Log in and go to <a>Account settings. </a>
                      </li>
                      <li>
                        Select <strong>Close account</strong> and follow the
                        prompts.
                      </li>
                    </ol>
                    <p>
                      After closing your account, you can also take additional
                      steps to delete your personal data. This action is
                      permanent and can’t be reversed. To delete your data:
                    </p>
                    <ol>
                      <li>
                        Go to the <a>EventDTL Privacy Center.</a>
                      </li>
                      <li>
                        Select <strong>Take control of your data,</strong> then{" "}
                        <strong>Delete my data.</strong>
                      </li>
                    </ol>
                    <p>
                      If you're unable to close your account, email us at
                      privacy@eventdtl.com. Use the email address associated
                      with the account you want to close.
                    </p>
                    <h5>Related articles</h5>
                    <a>
                      Close your EventDTL account and delete your personal data{" "}
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </article>
                </aside>
              </div>
            )}
          </section>
          <aside
            id="stillhavequestionshelpsection"
            style={{ marginBottom: "5rem" }}
          >
            <h2>Still have questions?</h2>
            <Link to={"/manage-my-events/help"}>
              <button>Browse Help Center</button>
            </Link>
          </aside>
        </section>
      </section>
    </>
  );
}

export default ContactUs;
