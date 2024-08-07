'use client';

import Image from 'next/image';

import { MaxWidthWrapper } from '@styles/common';

import { Container, Paper, Title, Text, RelativeWrapper, PageTitle, ListItem } from './TermsOfUseSection.style';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

import type { FC } from 'react';
import Link from 'next/link';

const TermsOfUseSection: FC = () => (
  <RelativeWrapper>
    <FloatingImage
      alt="background"
      height="clamp(624px / 2, 41.26vw, 624px)"
      hideUnder={650}
      left="-9.92vw"
      src="/images/GummyWormsTopdown.png"
      top="clamp(495px, 32.73vw, 543px)"
      width="clamp(416px / 2 , 27.5vw, 416px)"
    />
    <FloatingImage
      alt="background"
      height="clamp(407px / 2, 26.91vw, 407px)"
      hideUnder={650}
      right="14.41vw"
      src="/images/terms-of-use-popcorn.png"
      top="clamp(587px, 70.03vw, 1059px)"
      width="clamp(416px / 2, 27.51vw, 416px)"
    />
    <FloatingImage
      alt="background"
      height="clamp(267px / 2, 17.65vw, 267px)"
      hideUnder={650}
      left="-5.48vw"
      src="/images/White_frosting_splash_topdown.png"
      top="clamp(1275px, 131.21vw, 1984px)"
      width="clamp(277px / 2, 18.32vw, 277px)"
    />
    <FloatingImage
      alt="background"
      bottom="0"
      height="clamp(624px / 2, 41.26vw, 624px)"
      hideUnder={650}
      right="9.78vw"
      src="/images/green_beans.png"
      width="clamp(416px / 2, 27.5vw, 416px)"
    />
    <Container>
      <Image alt="background" src="/images/TermsOfUse01.jpg" style={{ objectFit: 'cover' }} fill />
    </Container>
    <MaxWidthWrapper>
      <Paper>
        <PageTitle>Terms of use</PageTitle>
        <Text>
          Welcome to the Orange Leaf, LLC website, <Link href="/">www.orangeleafyogurt.com</Link>. These Terms and
          Conditions of Use (“Terms”) apply to your access to, and use of, all or part of any website or mobile
          application of Orange Leaf, LLC or its subsidiaries and affiliated companies (collectively, “Orange Leaf,”
          “we,” or “us”), including <Link href="/">www.orangeleafyogurt.com</Link> and any other site, mobile
          application (“Application”), or online service where these Terms are posted (collectively, the “Sites”). By
          accessing the Sites, you (“you”) agree to be bound by these Terms regardless of whether or not you have read
          them. If you do not agree to these Terms, do not access the Sites. The Sites are not targeted towards, nor
          intended for use by, anyone under the age of 13. YOU MUST BE AT LEAST 13 YEARS OLD TO ACCESS AND USE THE
          SITES. If you are between the ages of 13 and 18, you may only use the Sites under the supervision of a parent
          or legal guardian who agrees to be bound by these Terms.
        </Text>
        <Text>
          This Application utilizes Google Maps and Google Earth. By using this Application, you are also are bound by
          the Google Maps/Google Earth Additional{' '}
          <a href="https://maps.google.com/help/terms_maps/" target="_blank">
            Terms of Service
          </a>{' '}
          and the Google{' '}
          <a href="https://policies.google.com/privacy" target="_blank">
            Privacy Policy
          </a>
          .
        </Text>
        <Text>
          This website is undergoing construction and corrective action to address accessibility issues experienced by
          some of our customers. Orange Leaf has adopted the W3C WAI Web Content Accessibility Guidelines (WCAG) as its
          accessibility standard for all online products and services that we design, develop and/or procure, on or
          after the effective date of this accessibility policy. We are working to ensure, to the extent practicable,
          the new online products and services satisfy the standard Success Criteria set forth in the WCAG 2.0. Orange
          Leaf is committed to making its Sites accessible to customers with disabilities and welcomes suggestions for
          improvement. While we strive to make the Sites as accessible as possible, we ask for your patience during this
          time of transitions.
        </Text>
        <Title>CHANGES TO TERMS AND CONDITIONS</Title>
        <Text>
          Orange Leaf may at any time, and at its sole discretion, modify these Terms or any policy or guideline of the
          Sites, including without limitation, the Privacy Policy, with or without notice. Such modifications will be
          effective immediately upon posting, and you waive any right you may have to receive specific notice of such
          changes or modifications. You agree to review these Terms periodically and your continued use of the Sites
          following such modifications will indicate your acceptance of these modified Terms. If you do not agree to any
          modification of these Terms, you must immediately stop using the Sites.
        </Text>
        <Title>INTELLECTUAL PROPERTY, COPYRIGHT AND TRADEMARK NOTICE</Title>
        <Text>
          The Sites and its contents, including but not limited to, all Site software, design, text, editorial
          materials, information, data, photographs, visual interfaces, user interfaces, images, graphics,
          illustrations, video, sound, games, clips, artwork, hyperlinks, displays, and other materials, (all such
          content collectively referred to as “Content”), and the design, structure, selection, coordination,
          expression, look and feel and arrangement of such Content, are protected under United States and international
          copyright laws and are the property of Orange Leaf or its third party licensors. All rights are reserved by
          Orange Leaf. The ORANGE LEAF name, design and related marks are registered trademarks of DFA Brands IP, LLC.
          All other names, logos, splash screens, page headers, custom graphics and button icons, or other indicia of
          origin displayed on the Sites are either service marks, names, logos, trademarks, service marks, trade dress,
          or are otherwise the property (collectively, “Marks”) of Orange Leaf or its third party licensors.
        </Text>
        <Text>
          Except as specifically permitted herein, copying, distributing, transmitting, displaying, modifying, selling
          or participating in the sale of, or otherwise exploiting or using any Content or any Marks in any form or by
          any means without the express written permission of Orange Leaf is prohibited and may violate the copyright,
          trademark or unfair competition laws of the United States and/or other countries. All rights not expressly
          granted are reserved.
        </Text>
        <Text>
          Orange Leaf hereby grants you a personal, non-exclusive, non-assignable, non-transferable, limited, and
          revocable license to use and display the Content and to use the Application for noncommercial and personal use
          only; provided that you maintain all copyright and other notices contained in such Content and only use the
          Application on a device owned or controlled by you as permitted by the rules contained in the terms contained
          in the Apple, Inc. Terms and Conditions (“Apple Terms”) or the Google Inc. Google Play Terms of Service
          (“Google Terms”), whichever is applicable to your device. Orange Leaf, content providers and content
          providers’ licensors do not transfer any title, right or interest to or in any Content to you. If any of the
          provisions of the Apple Terms or the Google Terms conflict with our Terms, our Terms will control, solely to
          the extent that such terms apply to the Application. You agree not to reproduce, modify, create derivative
          works from, display, perform, distribute, sell, rent, lease, transfer, sublicense, disseminate, broadcast or
          circulate any Content to any third party (including, without limitation, the display and distribution of
          Content via a third party website) without express prior written consent of Orange Leaf. Use of Content is
          only permitted with the express written permission of Orange Leaf and/or its licensors. You further agree that
          you will not disassemble, decompile, reverse engineer, modify or otherwise reduce the computer file in which
          the Content is stored to a human-readable form. In addition, you may not attempt to circumvent, avoid, bypass,
          remove, deactivate, impair or otherwise defeat any encryption, rights signaling or copy protection technology
          in which the Content is wrapped or otherwise associated with, and you may not edit, modify, translate, or
          create adaptations of the Content.
        </Text>
        <Text>This Section will survive the termination of your right to use the Sites.</Text>
        <Title>DIGITAL MILLENIUM COPYRIGHT ACT (“DMCA”) NOTICE</Title>
        <Text>
          Pursuant to the Digital Millennium Copyright Act, 17 U.S.C. Sec. 512(c), if you believe any material available
          on the Sites infringes upon a copyright that you own or control, you may file a notification of such
          infringement with our Designated Agent as set forth below or you can contact us via the{' '}
          <Link href="/about-us">Contact Us</Link> section of the Site.
        </Text>
        <Text>
          Orange Leaf, LLC <br />
          Customer Care
          <br />
          14850 Montfort Drive, Suite 131 PMB22
          <br />
          Dallas, TX 75254
          <br />
        </Text>
        <Text>_________________________</Text>
        <Text>
          If you knowingly misrepresent in your notification that the material or activity is infringing, you will be
          liable for any damages, including costs and attorneys’ fees, incurred by us or the alleged infringer as the
          result of our relying upon such misrepresentation in removing or disabling access to the material or activity
          claimed to be infringing.
        </Text>
        <Text>
          In accordance with the DMCA and other applicable law, we have adopted a policy of terminating, in appropriate
          circumstances and in our sole discretion, users who are deemed to be repeat infringers. We may also, in our
          sole discretion, limit access to the Sites and/or terminate the accounts of any users who infringe any
          intellectual property rights of others, whether or not there is any repeat infringement.
        </Text>
        <Title>YOUR COMMENTS AND TRANSMISSIONS</Title>
        <Text>
          We appreciate your comments, reviews, photos, content, remarks, feedback, suggestions, ideas, inventions,
          artwork, developments, concepts, and other types of communications, materials and submissions you disclose or
          transmit to us or to publicly-accessible social networks such as Facebook®, Twitter®, Instagram®, Path®,
          TwitPic®, Lockerz®, our Application, and similar information and image gathering and sharing services
          (collectively, “Submissions”). You represent and warrant that your Submissions are not subject to any
          confidentiality obligations and that you own and control all of the rights to the Submissions, have the lawful
          right to distribute and produce such Submissions, or otherwise have the right to grant the rights to Orange
          Leaf that you grant under these Terms. Orange Leaf is free to use the Submissions for any purpose whatsoever.
          By making a Submission, you grant Orange Leaf and its affiliates a perpetual, irrevocable, worldwide,
          royalty-free, non-exclusive and fully sublicensable right and license to make, use, reproduce, modify, adapt,
          publish, translate, create derivative works of, distribute, publicly perform, publicly display, develop,
          manufacture, advertise, and market your Submissions, and any related copyrights, moral rights or other
          intellectual property rights therein throughout the world, in any medium or technology of any kind now
          existing or developed in the future. If you elect to forward to us or to transmit via publicly-accessible
          social networks any such Submission, then by doing so, you acknowledge that (1) we are not liable for any use,
          disclosure, or return to you of your Submission, (2) no confidential relationship is established or is to be
          implied in any way from our receipt of the Submission and any statement to the contrary with your Submission
          shall not alter this condition, (3) you understand that you will not be entitled to any compensation from us
          based upon your Submission or our use thereof, (4) the receipt of your Submission shall not constitute a
          waiver by us of our rights to contest the validity of any copyright, or other intellectual property rights
          that you may now or hereafter claim for the Submission, (5) you release Orange Leaf and its agents and
          employees from any claims that such use, as authorized above, violates your rights, and (6) any previously,
          concurrently or subsequently submitted materials relating to this Submission shall be considered to have been
          submitted in accordance with these conditions. By making a Submission, you also warrant that you own the
          material/content submitted, that it is original, that it is not defamatory, and that Orange Leaf use of the
          Submission will not violate any third party’s rights. Orange Leaf is under no obligation to use any Submission
          or any part thereof.
        </Text>
        <Text>
          Further, you grant Orange Leaf and its sublicensees the right to use your name and likeness that you submit in
          connection with such materials and content, if they choose. You represent and warrant that you own or
          otherwise control all of the rights to any Submission and in the materials and content that you post, and that
          you have the lawful right to distribute and produce such Submissions, or otherwise have the right to grant the
          rights to Orange Leaf that you grant under these Terms; that the content is accurate; that use of any
          Submission, materials or content you supply does not and will not cause injury to any person or entity; and
          that you will indemnify Orange Leaf and its sublicensees for all claims resulting from any Submission,
          materials and content you supply. Orange Leaf has the right but not the obligation to monitor and edit or
          remove any activity or content on the Sites. Orange Leaf takes no responsibility and assumes no liability for
          Submissions and/or any materials or content posted by you or any third party.
        </Text>
        <Text>
          We ask that you do not submit confidential information or materials to us. We will not keep the Submission
          confidential and we may use it as we see fit. By submitting anything to us, you acknowledge that the
          Submission is not confidential, or that even if you think that it is, you are waiving any rights you may have
          to the Submission being confidential or any ownership interest you think that you have in the Submission.
          Also, please do not submit anything to us that you have done for your employer during the course of your
          employment.
        </Text>

        <Title>YOUR OBLIGATIONS</Title>
        <Text>
          In order to participate in certain areas of our Sites, you will need to register for an account. In providing
          registration and other information to Orange Leaf, you agree to provide true, accurate, current and correct
          information about yourself, and to maintain and update registration information to keep it true, accurate,
          current and complete. If Orange Leaf has reasonable grounds to suspect that such information is untrue,
          inaccurate, not current or incomplete, Orange Leaf has the right to suspend or terminate your account and
          refuse any and all current or future use of the account. You agree to maintain the security of your account by
          not sharing your password and will promptly notify Orange Leaf if you discover or otherwise suspect any
          security breaches related to your account. You agree to take responsibility for all activities that occur
          under your account and accept all risks of unauthorized access. In using the Sites you agree that you will
          not: (a) post, disseminate or transmit unauthorized advertising, promotional materials, chain letters, junk
          mail or any other type of unsolicited mass email to people or entities who have not agreed to be part of such
          mailings; (b) omit, delete, forge or misrepresent transmission information, including headers, return mailing
          and Internet protocol addresses, or otherwise manipulate identifiers to disguise the origin of any content;
          (c) impersonate any person or entity, or falsely state or otherwise misrepresent an affiliation with any
          person or entity; (d) engage in any activities intended to withhold or cloak identity or contact information;
          (e) send harassing and/or threatening messages to others; (f) post excessive responses to interactive features
          or functions of the Sites; or (g) engage in “flooding,” i.e., ICMP flooding and mail bombing (sending large
          amounts of email repeatedly to the same email address).
        </Text>
        <Text>
          You agree that you are responsible for your own communications and that you will not post, disseminate or
          transmit any content that: (a) is unlawful, harassing, defamatory, abusive, threatening, obscene, harmful,
          tortious, libelous, invasive of another’s privacy, obscene, pornographic, indecent, lewd, suggestive,
          threatening, inflammatory, fraudulent, otherwise objectionable or which threatens our relationship with our
          employees, partners, customers, or suppliers; (b) infringes or violates any party’s copyright, trademark,
          trade secret, patent or other proprietary right including, but not limited to, using third-party copyrighted
          materials without appropriate permission, using third-party trademarks without appropriate permission or
          attribution, and using or distributing third-party information protected as a trade secret in violation of a
          duty of confidentiality; (c) you do not have the right to disseminate or transmit under law or under
          contractual or fiduciary relationships; (d) contains personally identifiable information belonging to minors;
          (e) impersonates any person or entity or otherwise misrepresents your identity or affiliation with another
          person or entity; (f) is spam, direct marketing or any unsolicited advertising, promotional materials or other
          forms of solicitation or commercial content; or (g) violates these Terms, or in Orange Leaf sole discretion,
          is objectionable, restricts or inhibits any other person from using or enjoying the Sites, or which damage the
          image or rights of Orange Leaf, other users, or third parties.
        </Text>
        <Text>
          To the extent that the following activities are prohibited by applicable law, in using the Sites you will not:
          (a) use the Sites for any illegal purpose, in violation of any applicable laws or regulations; (b) publish web
          pages that contain links that initiate downloads or streaming of copyright-infringing or other illegal
          material; (c) electronically stalk or otherwise electronically harass another; or (d) engage in any Internet
          activities that would violate the personal privacy rights of others, including but not limited to, collecting
          and distributing information about Internet users without their permission, except as permitted by applicable
          law.
        </Text>
        <Title>MODIFICATIONS TO THE SITES</Title>
        <Text>
          Changes may be made at any time to the information, names, text, software, images, pictures, logos,
          trademarks, products and services and any other material displayed on, offered through or contained on the
          Sites. The Sites may include inaccuracies or typographical errors that may be corrected as they are discovered
          at Orange Leaf sole discretion. Further, Orange Leaf reserves the right, for any reason, in its sole
          discretion, to terminate, change or suspend any aspect of the Sites including but not limited to content,
          features or hours of availability. Orange Leaf may impose limits on certain features of the Sites or restrict
          your access to part or all of the Sites without notice or penalty.
        </Text>
        <Title>PRIVACY</Title>
        <Text>
          Our Privacy Policy applies to use of the Sites, and its terms are made a part of these Terms by this
          reference. Please review this privacy statement and print a copy for your records. Additionally, by using the
          Sites, you acknowledge and agree that Internet transmissions are never completely private or secure. You
          understand that any message or information you send to the Sites may be read or intercepted by others, even if
          there is a special notice that a particular transmission is encrypted. The Sites do not intend to target or
          collect personal information from individuals under the age of 13.
        </Text>

        <Title>MOBILE PAYMENT</Title>
        <Text>
          You may elect to participate in certain functionality of the Sites which will allow you to use the Sites to
          purchase Orange Leaf products (“Mobile Payment”). Mobile payment may be accepted at participating Orange Leaf
          locations in the United States. Orange Leaf reserves the right at any time to discontinue Mobile Payment or
          change the location of the stores accepting Mobile Payment.
        </Text>

        <Title>MOBILE ORDER AND PAY (MOP) AND DELIVERY</Title>
        <Text>
          You may also elect to participate in certain functionality of the Sites which will allow you in certain Orange
          Leaf locations in certain markets to use the Sites to order and pay for certain Orange Leaf products prior to
          arrival at the restaurant (“MOP”). Orange Leaf reserves the right at any time to discontinue MOP or change the
          location of the stores or markets offering MOP.
        </Text>

        <Title>GIFT CARDS TERMS AND CONDITIONS (“Gift Card Rules”)</Title>
        <Text>
          The Gift Card Terms and Conditions (this “Gift Card Rules”) is an agreement between you and Orange Leaf, and
          describes the terms and conditions that apply to your gift card. By buying, loading, or using a Gift Card, you
          agree to these terms. Please read the following provisions, as well as the complete Terms of Use and Privacy
          Policy that govern the Sites. These Gift Card Rules include an Arbitration provision that governs any disputes
          between you and us. This provision will: 1) Eliminate your right to a trial by jury; and 2) Substantially
          affect your rights, including preventing you from bringing, joining, or participating in class or consolidated
          proceedings.
        </Text>

        <Title>ABOUT YOUR GIFT CARD</Title>
        <Text>
          Orange Leaf gift cards are not subject to any service fees or expiration dates. Your use of a gift card
          constitutes your acceptance of the complete Gift Card Rules (including the Arbitration provisions). Gift cards
          are redeemable for food, drink and eligible merchandise at participating locations in the United States.
          Eligible merchandise or services are determined by Orange Leaf in its sole discretion and may be changed
          without notice. Gift cards cannot be used to purchase other gift cards and you will not receive Rewards points
          for the purchase of any gift card. Gift cards cannot be redeemed for cash or applied as payment to any
          account, unless required by law. In California, all gift cards are redeemable for cash upon request if the
          balance on the card is less than $10.00. Gift cards may be redeemable for cash when their balance falls below
          a certain amount in other states within the United States as well.
        </Text>

        <Title>ELECTRONIC GIFT CARDS</Title>
        <Text>
          The Electronic Gift Card program allows you to purchase and send a virtual Card via email. You may choose the
          design and dollar value (within certain limits) and complete your purchase using a credit card, or debit card.
          You will need the email address for the recipient of your Card eGift (also known as an “eGift” or “eGift
          Card”). You authorize us to charge your credit card or debit card at the time you purchase your eGift.
        </Text>
        <Text>
          We will send the recipient of your eGift an email notifying them that they have received an eGift from you. He
          or she will then be able to print out the eGift and bring it into a location to make a purchase. An eGift is
          like a gift card and should be treated like cash by the recipient.
        </Text>
        <Text>
          Each eGift has a unique gift card account number associated with it no matter how many times the email is
          printed out. We will only give refunds for unused eGifts with the original receipt.
        </Text>
        <Title>ADDING VALUE TO YOUR GIFT CARD</Title>
        <Text>
          In the United States, you can load a dollar value on a gift card by using a credit card, debit card or cash by
          visiting any participating Orange Leaf location. You may not load more than $100 worth of value on each gift
          card. There is no minimum amount that must be loaded onto your gift card. Orange Leaf may change the maximum
          and minimum amounts at any time by notifying you at the point of sale, by phone when you call or on the Sites,
          and such change shall not constitute an amendment to these Gift Card Rules.
        </Text>
        <Title>LOST, STOLEN OR DAMAGED GIFT CARD REPLACEMENT POLICY</Title>
        <Text>
          Unless you have an original sales receipt for your gift card and your 16-digit gift card number, or unless it
          has been registered by you on <Link href="/">www.orangeleafyogurt.com</Link> and you can provide us your email
          address or phone number that you used to register your gift card, the remaining gift card value will not be
          replaced if lost, stolen or damaged.
        </Text>
        <ul>
          <ListItem>
            If you registered your gift card with us, you can contact us via the{' '}
            <Link href="/about-us">Contact Us</Link> section of the Site or via your account balance page (go to disable
            my gift card) and we can deactivate your lost, stolen or damaged gift card and load the balance remaining at
            the time of notification onto a new gift card or Orange Leaf Rewards account.
          </ListItem>
          <ListItem>
            You can also go into a participating Orange Leaf location, with your original receipt for the gift card
            purchase and your 16-digit gift card number or, again, if you registered the gift card with us and you can
            provide your email address or phone number that you used to register the gift card. The store personnel can
            deactivate your gift card and issue you a new gift card with the remaining balance.
          </ListItem>
          <ListItem>
            If you cannot either go online or to a participating Orange Leaf restaurant and if your gift card has been
            lost, stolen or damaged, please mail: (1) the 16-digit gift card number (or if you registered your gift card
            with us, you can provide us with the email address or phone number used at the time of registration), (2) an
            original location receipt indicating the purchase of the gift card, (3) a copy of a valid government issued
            I.D. (Driver’s License, Military I.D., or Passport), and (4) your complete name and mailing address to:
            Orange Leaf, Attn: Gift Cards Replacement, 14850 Montfort Drive, Suite 131 PMB22, Dallas, TX 75254. Upon
            satisfactory receipt of these required information, Orange Leaf will cancel your old gift card and issue a
            new gift card in the amount of any remaining balance on your old gift card on the date of Orange Leaf
            receipt of such information. The replacement gift card will be mailed to the address you provide, which must
            be a valid street address. P.O. Boxes will not be accepted. Please make a copy of all documents you submit
            to us for your records. All documents submitted become Orange Leaf property and will not be returned. Please
            allow up to 8 weeks for delivery of the replacement gift card. Orange Leaf shall not be responsible for any
            lost, late, illegible, damaged, misdirected, incomplete or postage due mail. Reproduction, purchase, trade
            or sales of Report Form, gift card numbers, and or cash register receipts are prohibited. Fraudulent
            submissions may result in prosecution under applicable federal mail fraud statutes.
          </ListItem>
        </ul>
        <Title>FRAUD ASSOCIATED WITH YOUR GIFT CARD OR CARD BALANCE</Title>
        <Text>
          We will not accept any gift card, or will limit use of any gift card or gift card balance, if we reasonably
          believe that the use is unauthorized, fraudulent or otherwise unlawful, and we consider such action
          appropriate to limit our risk. Orange Leaf does not control who may sell preloaded gift cards, nor can we
          control the price or preloaded denominations offered by independent sellers. Consequently, Orange Leaf has no
          liability to you for any third party fraud or unlawful activity associated with any gift card balance. If
          Orange Leaf discovers any gift card or gift card balance was sourced or derived from fraud or other unlawful
          means, in our sole discretion, we may cancel all impacted gift cards and retain all related gift card balances
          without notice to you. We may use retained gift card balances to help offset our liability to card companies,
          networks and issuers of lost or stolen credit and debit cards used to purchase or load gift cards.
        </Text>
        <Title>REGISTRATION, LIABILITY FOR UNAUTHORIZED TRANSACTIONS</Title>
        <Text>
          To register your gift card, please visit <Link href="/">www.orangeleafyogurt.com</Link>. When registering a
          gift card, you agree that you will: (i) provide complete and accurate information about yourself; and (ii)
          update such information if it changes. If you do not provide or update such information, or if we have
          reasonable grounds to suspect that you have not provided or updated such information, we shall have the right,
          in our sole and absolute discretion, to disable your gift card. If you believe your gift card has been
          disabled in error, please contact us via the <Link href="/about-us">Contact Us</Link> section of the Site. You
          are responsible for: (a) the accuracy of all information that you provide to us; and (b) maintaining the
          confidentiality and security of your gift card information.
        </Text>
        <Text>
          Because your gift card is used like cash for purchases from participating locations, you are responsible for
          all transactions associated with your gift card, including unauthorized transactions. However, if your gift
          card is lost, stolen or destroyed, the card can be replaced with the balance remaining on it at the time of
          your call, but only if you have registered it with us. Please notify us immediately if you change any of your
          registration information. If your gift card becomes lost, stolen or damaged, you should contact us via the{' '}
          <Link href="/about-us">Contact Us</Link> section of the Site. Your gift card balance is only protected from
          the point in time you notify us that your gift card is missing. We will freeze the remaining balance on your
          gift card at the time you notify us and will load that remaining balance on a replacement gift card.
        </Text>
        <Title>ARBITRATION</Title>
        <Text>
          Please read this section carefully. It affects rights that you may otherwise have. It provides for resolution
          of most disputes through arbitration instead of court trials and class actions. Arbitration is more informal
          than a lawsuit in court, uses a neutral arbitrator instead of a judge or jury, and discovery is more limited.
          Arbitration is final and binding and subject to only very limited review by a court. This arbitration clause
          shall survive termination of these Gift Card Rules.
        </Text>
        <Text>
          This provision is intended to be interpreted broadly to encompass all disputes or claims arising out of or
          relating to these Gift Card Rules, your gift card and your relationship with us. Any dispute or claim arising
          out of or relating to these Gift Card Rules or use of the gift card and your relationship with Orange Leaf or
          any subsidiary, parent or affiliate company or companies (whether based in contract, tort, statute, fraud,
          misrepresentation or any other legal theory) will be resolved by binding arbitration, except that either of us
          may take claims to small claims court if they qualify for hearing by such a court.
        </Text>
        <Text>
          Notwithstanding the above, you may choose to pursue your claim in court and not by arbitration if you opt out
          of this arbitration provision within <strong>30</strong> days from the earliest of the date you purchased,
          loaded, reloaded or used any of your gift cards (the “Opt Out Deadline”) after these Gift Card Rules have gone
          into effect. You may opt out of these arbitration procedures by sending us a written notice that you opt out
          to the following address: Orange Leaf, Attn: Customer Service, 14850 Montfort Drive, Suite 131 PMB22, Dallas,
          TX 75254. Any opt-out received after the Opt Out Deadline (allowing three (3) additional days for mailing)
          will not be valid and you must pursue your claim in arbitration or small claims court.
        </Text>
        <Text>
          For all disputes, whether pursued in court or arbitration, you must first send a written description of your
          claim to our Customer Service department to allow us an opportunity to resolve the dispute. You and we each
          agree to negotiate your claim in good faith. You may request arbitration if your claim or dispute cannot be
          resolved within sixty (60) days. The arbitration of any dispute or claim shall be conducted in accordance with
          the rules of the American Arbitration Association (“AAA”), including the AAA’s Consumer Arbitration Rules (as
          applicable), as modified by this Agreement. The AAA Rules and information about arbitration and fees are
          available online at www.adr.org. You and we agree that these Gift Card Rules evidences a transaction in
          interstate commerce and this arbitration provision will be interpreted and enforced in accordance with the
          U.S. Federal Arbitration Act and federal arbitration law, and not governed by state law. Any arbitration will
          be held in a reasonably convenient location in the state in which you reside or at another mutually agreed
          location. The arbitration will be conducted in the English language. An arbitrator may award on an individual
          basis any relief that would be available in a court, including injunctive or declaratory relief to the extent
          required to satisfy your individual claim, and must follow and enforce these Gift Card Rules and this
          arbitration agreement as a court would. Any arbitration shall be confidential, and neither you nor we may
          disclose the existence, content or results of any arbitration, except as may be required by law or for
          purposes of enforcement of the arbitration award. Judgment on any arbitration award may be entered in any
          court having proper jurisdiction.
        </Text>
        <Text>
          Except for claims determined to be frivolous, upon filing of the arbitration demand, we will pay half of all
          filing, administration and arbitrator fees other than the initial $200 filing fee. Each party will bear the
          fees and expense of its own attorneys, experts, witnesses and preparation and presentation of evidence at the
          arbitration.
        </Text>
        <Text>
          You and we each agree that any proceeding, whether in arbitration or in court, will be conducted only on an
          individual basis and not in a class, consolidated or representative action. If a court or arbitrator
          determines in an action between you and us that this class action waiver is unenforceable, the arbitration
          agreement will be void as to you. If you opt out of the arbitration provision as specified above, this class
          action waiver provision will not apply to you. Neither you, nor any other customer, can be a class
          representative, class member, or otherwise participate in a class, consolidated or representative proceeding
          without having complied with the opt out procedure set forth above. If for any reason a claim proceeds in
          court rather than through arbitration, you and we each waive any right to a jury trial.
        </Text>
        <Text>
          These Gift Card Rules and this agreement to arbitrate shall be governed by and construed in accordance with
          the laws of the State of Texas not withstanding any conflict-of-laws rules.
        </Text>
        <Title>ORANGE LEAF REWARDS TERMS AND CONDITIONS (“Orange Leaf Loyalty Program Rules”)</Title>
        <Text>
          Orange Leaf Rewards is the exclusive Orange Leaf loyalty program that allows you to earn rewards for every
          qualified purchase you make in any participating Orange Leaf location. All customers can join Orange Leaf
          Rewards. There is no fee to join. In order to join Orange Leaf Rewards, you must first obtain and activate an
          Orange Leaf Rewards account by one of the following methods: (1) obtain an Orange Leaf Rewards card at any
          participating Orange Leaf location; (2) download the Orange Leaf mobile application; or (3) sign up online.
        </Text>
        <Text>
          As an Orange Leaf Rewards member, you may receive special promotions, coupons and invitations to exclusive
          events at Orange Leaf locations. You must present your Orange Leaf Rewards card, your 16-digit Orange Leaf
          Rewards account number, or other identifiable information provided at time of registration (such as your email
          address or phone number that is linked to your Rewards account) at the time of check out to earn Orange Leaf
          Rewards points; however, if you forget to do so, you may either (i) take your original receipt back to the
          Orange Leaf location from which you made your purchase, and request your Orange Leaf Rewards points for that
          purchase be added to your Orange Leaf Rewards account, or (ii) contact us via the{' '}
          <Link href="/about-us">Contact Us</Link> section of the Site. Make sure that you keep a copy of your receipt
          for the previous qualified purchases as we will need the information from the receipt in order to update your
          account accordingly with the rewards points earned for any qualified purchases you make in participating
          Orange Leaf location(s). If you cannot contact us via the
          <Link href="/about-us">Contact Us</Link> section of the Site or return to the Orange Leaf location, then you
          can mail a copy of your receipt and your Orange Leaf Rewards card number to Orange Leaf, Attn: Orange Leaf
          Rewards, 14850 Montfort Drive, Suite 131 PMB22, Dallas, TX 75254. Visit our website for answers to frequently
          asked questions regarding Orange Leaf Rewards.
        </Text>
        <Text>
          Your use of an Orange Leaf Rewards account constitutes your acceptance of the complete Orange Leaf Loyalty
          Program Rules. Orange Leaf may at any time, and at its sole discretion, modify the terms and conditions of the
          Orange Leaf Loyalty Program, with or without notice. Such modifications will be effective immediately upon
          posting. You agree to review these Orange Leaf Loyalty Program Rules periodically and your continued use of or
          participation in the Orange Leaf Rewards following such modifications will indicate your acceptance of any
          modified terms and conditions. If you do not agree to any modification of the terms and conditions of use, you
          must immediately stop using your Orange Leaf Rewards account.
        </Text>
        <Text>
          Orange Leaf may make changes to Orange Leaf Rewards, including, without limitation, the benefits of the
          program, at any time, and from time to time, without prior notice. Further, Orange Leaf reserves the right to
          suspend or end the Orange Leaf Rewards program without prior notice, in Orange Leaf sole discretion. Orange
          Leaf also reserves the right to suspend or end the Orange Leaf Rewards program or certain aspects and/or
          benefits thereof in certain geographic areas without prior notice. Void where prohibited.
        </Text>
        <Title>ORANGE LEAF REWARDS POINTS AND REWARDS</Title>
        <Text>
          You will earn 10 points for every dollar spent on qualified purchases in a participating location as long as
          you present your Orange Leaf Rewards card or your 16-digit Orange Leaf Rewards account number at the time of
          purchase. Your Orange Leaf Rewards card can also be used as a prepaid/stored value card (see below).
        </Text>
        <Text>
          You will receive a $5 reward for every 500 Orange Leaf Rewards points you earn. Your rewards are automatically
          saved on your Orange Leaf Rewards account. To redeem them, you must present your Orange Leaf Rewards card or
          your 16-digit Orange Leaf Rewards account number at the time of purchase.
        </Text>
        <Text>
          Qualified purchases are determined by Orange Leaf in its sole discretion and may be changed without notice.
          The purchase of an Orange Leaf gift card and/or redemption of Orange Leaf Rewards are not qualified purchases;
          however, purchases (other than purchases of gift cards) made at a participating Orange Leaf location using an
          Orange Leaf gift card and/or a preloaded Orange Leaf Rewards card (other than use of any Orange Leaf Rewards
          rewards) are considered qualified purchases. You cannot use rewards to purchase Orange Leaf gift cards. Please
          note that rewards will expire upon the earlier of (a) 12 months of inactivity on your Orange Leaf Rewards
          card, or (b) the following rewards expiration schedule:
        </Text>
        <ul>
          <ListItem>
            Earned $5 Rewards, which are $5 rewards we give you for every 500 Orange Leaf Rewards points you earn,
            expire 90 days after you receive your reward.
          </ListItem>
          <ListItem>
            Coupons and other rewards we may send you on a periodic basis (other than your Earned $5 Rewards) typically
            expire 30 days after you receive the coupon or reward.
          </ListItem>
          <ListItem>The expiration date of coupons and rewards will be listed on your account balance.</ListItem>
        </ul>
        <Text>
          The only way to redeem your rewards earned is by registering your Orange Leaf Rewards card and presenting your
          Orange Leaf Rewards card, your 16-digit Orange Leaf Rewards account number, or other identifiable information
          provided at time of registration (such as your email address or phone number that is linked to your Rewards
          account) at the time of check out. You must register you Orange Leaf Rewards card to redeem your rewards. You
          will, however, continue to accumulate reward points for qualified purchases in participating Orange Leaf
          locations. You must provide us with your email address in order to register your Rewards account. You may
          elect to opt out of receiving marketing and promotional from Orange Leaf, however, if you do so, you will also
          be opting out of us sending to you special promotions, coupons and/or invitations to exclusive events from
          Orange Leaf.
        </Text>
        <Text>
          If you want to combine your reward points and/or rewards from multiple cards, simply register the Orange Leaf
          Rewards account number or card that you will keep as your primary Orange Leaf Rewards account and follow the
          steps to merge Orange Leaf Rewards accounts on the Site. If you have any questions or if you cannot complete
          the merger yourself online, you can always contact us via the Contact Us section of the Site with your request
          to combine multiple Orange Leaf Rewards cards. We will need the numbers of all Orange Leaf Rewards cards and
          you will need to indicate which Orange Leaf Rewards card is to be the primary one; we will transfer your
          reward points and/or rewards from the identified Orange Leaf Rewards cards to the one that you designate as
          your primary account or card, and then deactivate your other Orange Leaf Rewards cards.
        </Text>
        <Title>USE OF YOUR ORANGE LEAF REWARDS CARD AS A PREPAID/STORED VALUE CARD</Title>
        <Text>
          Eventually, your Orange Leaf Rewards account or card will allow you to load a dollar value on to it for future
          purchases at participating Orange Leaf locations. The dollar value that you load onto your Orange Leaf Rewards
          account or card is a prepayment only for the goods and services of participating Orange Leaf locations. No
          credit card, credit line, overdraft protection or deposit account is associated with an Orange Leaf Rewards
          account or card. Unless otherwise required by law or permitted by these Orange Leaf Loyalty Program Rules, any
          amount on your Orange Leaf Rewards account or card is nonrefundable and may not be redeemed for cash. No
          interest, dividends or any other earnings on funds deposited to an Orange Leaf Rewards account or card will
          accrue or be paid or credited to you by Orange Leaf. The value associated with the Orange Leaf Rewards account
          or card is not insured by the Federal Deposit Insurance Corporation (FDIC).
        </Text>
        <Text>
          Most Orange Leaf locations in the United States accept your Orange Leaf Rewards account or card. Certain
          Orange Leaf -branded locations may not permit you to use the Orange Leaf Rewards card for payment, including
          some franchise locations, special venue locations, or in restaurants located outside the United States, to the
          extent applicable. We reserve the right not to accept any Orange Leaf Rewards account or card or otherwise
          limit use of an Orange Leaf Rewards account or card if we reasonably believe that the use is unauthorized,
          fraudulent or otherwise unlawful.
        </Text>
        <Title>ADDING VALUE TO YOUR ORANGE LEAF REWARDS ACCOUNT OR CARD</Title>
        <Text>
          Soon, your Orange Leaf Rewards account or card can be used as an Orange Leaf gift card. When such
          functionality is launched, in the United States, you will be able to load a dollar value on an Orange Leaf
          Rewards account or card by using a credit card, debit card or cash by visiting any participating Orange Leaf
          location. You may not load more than $100 worth of value on each Orange Leaf Rewards account or card. There is
          no minimum amount that must be loaded onto your Orange Leaf Rewards account or card. Orange Leaf may change
          the maximum and minimum amounts at any time by notifying you at the point of sale, by phone when you call or
          on the Sites, and such change shall not constitute an amendment to these Orange Leaf Loyalty Program Rules.
        </Text>
        <Title>RECEIPTS AND STATEMENTS</Title>
        <Text>
          Orange Leaf Rewards accountholders are not sent statements of itemized transactions from an Orange Leaf
          Rewards account. You can check the balance of your Orange Leaf Rewards account or card or review recent
          transactions on your Orange Leaf Rewards account or card by visiting our website or contacting us via the
          Contact Us section of the Site. You will need to have your Orange Leaf Rewards card, your 16-digit Orange Leaf
          Rewards account number, or other identifiable information provided at time of registration (such as your email
          address or phone number that is linked to your Rewards account) available in order to access your account. The
          account balance for an Orange Leaf Rewards account or card or Orange Leaf gift card also will appear on your
          receipt from a point-of-sale register. When you use your Orange Leaf Rewards account or card, you will receive
          a receipt if you request one but will not be asked to sign the receipt. The receipt will indicate that the
          purchase was made using an Orange Leaf Rewards account or card and will provide the remaining balance of your
          Orange Leaf Rewards account or card. You should keep your receipts and check your online statement to ensure
          that your account balance is correct.
        </Text>
        <Title>BILLINGS AND ERROR CORRECTIONS</Title>
        <Text>
          We reserve the right to correct the balance of your Orange Leaf Rewards card or account if we believe that a
          clerical, billing or accounting error occurred. If you have questions regarding your transaction history or
          any correction, or if you dispute any transaction or correction that has been assessed against your Orange
          Leaf Rewards account or card, please contact us via our Contact Us page on the Site. We will conduct an
          investigation and communicate the results and correct any error that we verify as soon as we finish the
          investigation. If no error was found, we will communicate an explanation. We shall have no liability for any
          billing error unless you provide us notice within 60 days of the date of the transaction in question. You
          should monitor your transactions and account balances closely.
        </Text>
        <Title>FRAUD ASSOCIATED WITH YOUR ORANGE LEAF REWARDS ACCOUNT OR CARD OR ACCOUNT OR CARD BALANCE</Title>
        <Text>
          We will not accept any Orange Leaf Rewards account or card, or will limit use of any Orange Leaf Rewards
          account or card or account or card balance, if we reasonably believe that the use is unauthorized, fraudulent
          or otherwise unlawful, and we consider such action appropriate to limit our risk. Orange Leaf does not control
          who may sell preloaded Orange Leaf Rewards account or cards, nor can we control the price or preloaded
          denominations offered by independent sellers. Consequently, Orange Leaf has no liability to you for any third
          party fraud or unlawful activity associated with any Orange Leaf Rewards account or card balance. If Orange
          Leaf discovers any Orange Leaf Rewards account or card or account or card balance was sourced or derived from
          fraud or other unlawful means, in our sole discretion, we may cancel all impacted Orange Leaf Rewards accounts
          or cards and retain all related Orange Leaf Rewards account or card balances without notice to you. We may use
          retained Orange Leaf Rewards account or card balances to help offset our liability to card companies, networks
          and issuers of lost or stolen credit and debit cards used to purchase or load Orange Leaf gift cards and
          Orange Leaf Rewards accounts or cards.
        </Text>
        <Title>REPLACING A LOST OR STOLEN ORANGE LEAF REWARDS ACCOUNT OR CARD</Title>
        <Text>
          If your Orange Leaf Rewards card is lost, stolen or destroyed or you cannot remember your Orange Leaf Rewards
          account number of any of the information you used to activate such account, the card can be replaced with the
          balance remaining on it at the time of your call, but only if you have registered it with us. Please notify us
          immediately if you change any of your registration information. If your Orange Leaf Rewards card is ever lost
          or stolen, visit your local participating Orange Leaf location and request a new Orange Leaf Rewards card. If
          you remember the 16-digit number of the Orange Leaf Rewards card you have lost or stolen or your email and/or
          phone number that you used when registering your Rewards account, a participating Orange Leaf restaurant will
          be able to deactivate your old card and issue you a new one. Your Orange Leaf Rewards card balance is only
          protected from the point in time you notify us that your Orange Leaf Rewards card is missing. We will freeze
          the remaining balance on your Orange Leaf Rewards card at the time you notify us and will load that remaining
          balance on a replacement Orange Leaf Rewards card. If you do not remember any of this information, you will
          need to obtain and register a new Orange Leaf Rewards account either in a participating Orange Leaf location
          or online by contacting us via the <Link href="/about-us">Contact Us</Link> section of the Site; we are sorry
          but none of your Rewards points, rewards or balances can be transferred if you cannot remember the 16-digit
          number of the Orange Leaf Rewards account or card or the email address or phone number that you used to
          register your account
        </Text>
        <Title>USERNAME, PASSWORD AND ACCESS TO YOUR ORANGE LEAF REWARDS CLUB ACCOUNT</Title>
        <Text>
          You are solely responsible for managing your password and for keeping your password confidential. No one from
          Orange Leaf will be authorized to provide you your password. If you forget your username or password, click on
          the “Forgot Your Password” link, or contact us via the <Link href="/about-us">Contact Us</Link> section of the
          Site to request your username or password. For your privacy, we do not have access to your password
          information. However, we can reset it for you so that you can update your account with a new password. You are
          also solely responsible for restricting access to any computer or mobile device you use to access your Orange
          Leaf Rewards membership. You agree that you are responsible for all activities that occur on your account or
          through use of your password by yourself or by other persons. If we provide you with, and you opt for a
          “Remember me” feature for your Orange Leaf Rewards account, or if you login with your personal Facebook
          account, a cookie helps Orange Leaf recall certain items of your specific information on subsequent visits,
          including your username and password. When you return to Orange Leaf Rewards, the information you previously
          provided can be retrieved, so that it is not necessary to enter your username and password to access certain
          functionality. While cookies are a convenience, please remember that if you elect the “Remember Me” option,
          anyone who can access the computer or mobile device you are using will have the ability to access your account
          for certain functions and view certain information about your account.
        </Text>
        <Title>CONSENT TO ELECTRONIC COMMUNICATIONS</Title>
        <Text>
          Through your registration of your Orange Leaf Rewards account, you consent to receive communications from
          Orange Leaf about Orange Leaf and/or your Orange Leaf Rewards membership electronically, either by e-mail or
          by notices posted on the Sites, as determined by Orange Leaf in its sole discretion. You agree that a notice,
          disclosure, agreement, or other communication be sent to you by Orange Leaf in writing is satisfied by such
          electronic communication. You agree that Orange Leaf may send you e-mails which include notices about your
          account as well as information pertaining to our products and/or services, such as featured products or new
          offerings. You agree that this information is part of your Orange Leaf Rewards membership and your
          relationship with Orange Leaf.
        </Text>
        <Title>ORANGE LEAF INITIATED ORANGE LEAF REWARDS CANCELLATIONS</Title>
        <Text>
          Orange Leaf may suspend or cancel your Orange Leaf Rewards membership account, or otherwise restrict your use
          of any of Orange Leaf services, in Orange Leaf sole discretion, with or without cause.
        </Text>
        <Title>SECURITY</Title>
        <Text>
          In connection with any Orange Leaf gift card or Orange Leaf Rewards card, your personally identifiable and
          financial information are encrypted using SSL (Secure Socket Layer) encryption technology before being sent
          over the Internet. This is industry standard technology designed to protect the security of your information.
          To help prevent unauthorized access to your data, maintain data accuracy, and ensure the correct use of
          information, we have also established physical, electronic, and managerial procedures designed to safeguard
          and secure the information we collect online.
        </Text>
        <Title>DISCLAIMER</Title>
        <Text>
          THE SITES, THEIR CONTENTS, AND ANY SOFTWARE, FUNCTIONS AND ALL INFORMATION, PRODUCTS AND SERVICES CONTAINED IN
          OR OFFERED THROUGH THE SITES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT REPRESENTATIONS OR
          WARRANTIES OF ANY KIND. ORANGE LEAF AND ITS LICENSORS AND CONTENT PROVIDERS EXPRESSLY DISCLAIM ALL SUCH
          REPRESENTATIONS AND WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, WARRANTIES OF TITLE,
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NONINFRINGEMENT (INCLUDING, WITHOUT LIMITATION,
          NONINFRINGEMENT OF THIRD PARTY RIGHTS, ERROR-FREE OR UNINTERRUPTED SERVICE, ACCURACY AVAILABILITY,
          RELIABILITY, SECURITY, CURRENCY AND COMPLETENESS ARISING FROM OR RELATING TO THE SITES, THEIR CONTENT OR ANY
          LINKS, ANY SOFTWARE, TOOLS, TIPS, PRODUCTS OR SERVICES PROVIDED THROUGH THE SITES) AND ANY IMPLIED WARRANTIES
          ARISING FROM COURSE OF DEALING OR COURSE OF PERFORMANCE WITH RESPECT TO THE SITES, ANY GIFT CARD AND/OR ANY
          ORANGE LEAF REWARDS CARD OR ACCOUNT. ORANGE LEAF DOES NOT WARRANT THAT THE GIFT CARD AND/OR THE ORANGE LEAF
          REWARDS CARD OR ACCOUNT WILL ALWAYS BE ACCESSIBLE OR ACCEPTED. ORANGE LEAF DOES NOT WARRANT THAT THE SITES OR
          THEIR CONTENTS WILL BE COMPLETE, ACCURATE, TIMELY, UNINTERRUPTED, SECURE OR ERROR FREE, OR THAT DEFECTS WILL
          BE CORRECTED. ALL INFORMATION ON THE SITES IS SUBJECT TO CHANGE WITHOUT NOTICE. SOME JURISDICTIONS DO NOT
          ALLOW THE EXCLUSION OF CERTAIN WARRANTIES SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
        </Text>
        <Title>LIMITATION OF LIABILITY</Title>
        <Text>
          IN NO EVENT SHALL ORANGE LEAF OR ANY OF ITS SUBSIDIARIES, AFFILIATES, FRANCHISEES, LICENSEES AND ANY OF THEIR
          RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, MEMBERS, SHAREHOLDERS, AGENTS, SUCCESSORS, ASSIGNS OR OTHER
          REPRESENTATIVES BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, CONSEQUENTIAL, SPECIAL, EXEMPLARY, INCIDENTAL OR
          AGGRAVATED DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA, INCOME OR PROFIT, LOSS OF OR
          DAMAGE TO PROPERTY AND THIRD PARTY CLAIMS) OR ANY OTHER DAMAGES OF ANY KIND, ARISING OUT OF OR IN CONNECTION
          WITH: THE SITES; ANY CONTENT OR MATERIALS, INFORMATION, QUALIFICATION AND RECOMMENDATIONS APPEARING ON THE
          SITES; ANY SOFTWARE, TOOLS, TIPS, PRODUCTS, OR SERVICES OFFERED THROUGH, CONTAINED IN OR ADVERTISED ON THE
          SITES; ANY LINK PROVIDED ON THE SITES; AND YOUR ACCOUNT AND PASSWORD, WHETHER OR NOT ORANGE LEAF HAS BEEN
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL ORANGE LEAF OR ITS AFFILIATES OR SUBSIDIARIES
          HAVE ANY LIABILITY FOR UNAUTHORIZED ACCESS TO, OR ALTERATION, THEFT OR DESTRUCTION OF A GIFT CARD AND/OR
          ORANGE LEAF REWARDS ACCOUNT OR CARD THROUGH ACCIDENT, MISUSE OR FRAUDULENT MEANS OR DEVICES BY YOU OR ANY
          THIRD PARTY, OR AS A RESULT OF ANY DELAY OR MISTAKE RESULTING FROM ANY CIRCUMSTANCES BEYOND OUR CONTROL. THIS
          EXCLUSION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW. THIS PROVISION SHALL SURVIVE THE
          TERMINATION OF YOUR RIGHT TO USE THE SITES.
        </Text>
        <Text>
          YOU ACKNOWLEDGE THAT YOU WILL BE FULLY LIABLE FOR ALL DAMAGES RESULTING DIRECTLY OR INDIRECTLY FROM YOUR USE
          OF THE SITES.
        </Text>
        <Title>INDEMNIFICATION</Title>
        <Text>
          You agree to defend, indemnify and hold Orange Leaf and each of its subsidiaries, affiliates, franchisees,
          licensees and any of their respective directors, officers, employees, shareholders, members, agents,
          licensees, successors, assigns or other representatives, harmless from and against any and all claims, losses,
          damages, liabilities, costs and expenses, including reasonable fees and expenses of counsel, incurred or
          suffered by them and arising from or related to your (i) use of the Sites including, without limitation,
          transmission or placement of information or material by you on the Sites, (ii) use of a gift card, (iii) use
          of an Orange Leaf Rewards card, account or any earned rewards or points, or (iv) violation of any of these
          Terms including, without limitation, the Orange Leaf Loyalty Program Rules and the Gift Card Rules. This
          provision shall survive the termination of your right to use the Sites.
        </Text>
        <Title>DISPUTE RESOLUTION</Title>
        <Text>
          All disputes between you and Orange Leaf arising or relating to: (a) these Terms; (b) the Sites; (c) any
          advertisement or promotion relating to these Terms or the Sites; or (d) transactions effectuated through the
          Sites; or (e) the relationship which results from these Terms (including relationships with third parties who
          are not party to these Terms) shall be resolved by binding individual arbitration under the American
          Arbitration Association’s rules for consumer-related disputes. Neither you nor Orange Leaf will participate in
          a class action or class-wide arbitration for any claims covered by these Terms. If this class action waiver is
          found to be unenforceable in a particular case, then this entire arbitration agreement shall be null and void
          in that case. These Terms shall be governed by the Federal Arbitration Act and, where consistent, Texas law.
          Orange Leaf reserves the right to change this dispute resolution provision, but any such changes will not
          apply to disputes filed before the effective date of the amendment. This provision will survive the
          termination of your right to use the Sites.
        </Text>
        <Title>TERMINATION</Title>
        <Text>Orange Leaf may at any time and at its sole discretion terminate your right to use the Sites.</Text>
        <Title>GOVERNING LAW</Title>
        <Text>
          You agree that all matters relating to your access to or use of the Sites, including all disputes, will be
          governed by the laws of the United States and by the laws of the State of Texas without regard to its
          conflicts of laws provisions. You agree to the personal jurisdiction by and venue in the state and federal
          courts in Dallas County, Texas, and waive any objection to such jurisdiction or venue.
        </Text>
        <Title>ASSIGNMENT</Title>
        <Text>
          We may assign all or part of these Terms without notice to you. We are then released from all liability. You
          may not assign these Terms without our prior written consent and any attempted assignment will be void.
        </Text>
        <Title>GENERAL PROVISIONS</Title>
        <Text>
          Except for the portion of these Terms specifically labeled as the Orange Leaf Rewards Terms and Conditions,
          which govern the Orange Leaf Rewards program (i.e., Orange Leaf Loyalty Program Rules) or the Orange Leaf Gift
          Card Terms and Conditions, which govern the Orange Leaf Gift Card program (i.e., Gift Card Rules), these Terms
          constitute a binding agreement between you and Orange Leaf and supersede all prior agreements, understandings
          and representations between the parties regarding the subject matter herein. In the event of an inconsistency
          between these Terms and either the Orange Leaf Loyalty Program Rules or the Gift Card Rules relating to your
          use of the Sites, these Terms shall prevail. In the event of an inconsistency between these Terms and the
          Orange Leaf Loyalty Program Rules relating to your use of your Orange Leaf Rewards loyalty card or Orange Leaf
          Rewards points, the Orange Leaf Loyalty Program Rules shall prevail. In the event of an inconsistency between
          these Terms and the Gift Card Rules relating to your use of your Orange Leaf gift card, the Gift Card Rules
          shall prevail. No failure by Orange Leaf or you to exercise any rights, powers or remedies hereunder or its
          delay to do so shall constitute a waiver of these rights, powers or remedies. The single or partial exercise
          of a right, power or remedy shall not prevent its subsequent exercise or the exercise of any other right,
          power or remedy. If any provision of these Terms or part thereof is or becomes illegal, invalid or
          unenforceable in any jurisdiction, the illegality, invalidity or unenforceability of that provision will not
          affect the legality, validity or enforceability of the remainder of the provision or the remaining provisions
          of these Terms, as the case may be, or the legality, validity or enforceability of that provision or part
          thereof in any other jurisdiction. These Terms are effective until terminated by you or Orange Leaf, which
          Orange Leaf may do at any time, without notice, in its sole discretion. If you become dissatisfied with the
          Sites, your only recourse is to immediately discontinue use of the Sites. All provisions of the Terms
          regarding representations, warranties, indemnification, disclaimers, and limitations of liability shall
          survive the termination of the Terms.
        </Text>
        <Text>
          If you have any questions or comments about these Terms, please contact us via the{' '}
          <Link href="/about-us">Contact Us</Link> section of the Site.
        </Text>
        <Title>LINKS</Title>
        <Text>
          The Sites contains links to or references to other web sites owned and operated by third party, including
          among others those of advertisers and other third parties and companies whose trademarks appear on the Sites.
          These links are provided for your convenience only. No endorsement of any third party products, services or
          information is expressed or implied by any information, material or content of any third party contained in,
          referred to, included on, or linked from or to this Site. Any information, data, opinions, recommendation,
          products or services provided by such third parties through links to other websites or otherwise made
          available through their websites are solely those of such third parties and not of Orange Leaf or its
          affiliates. This could be the case even for those web sites that carry Orange Leaf or its affiliates’
          trademarks or logos or which are framed by the Sites. Your use of such third party websites is subject to the
          terms and conditions of use and the privacy policies of such websites. We are not responsible for the
          information collection practices or the content of the sites to which we link.
        </Text>
        <Title>NOTICE TO CALIFORNIA RESIDENTS</Title>
        <Text>
          Under California Civil Code Section 1789.3, California website users are entitled to the following specific
          consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the California
          Department of Consumer Affairs may be contacted in writing at 1625 North Market Blvd., Suite N 112,
          Sacramento, CA 95834 or by telephone at (800) 952-5210.
        </Text>
        <Text>
          If you are a California resident, you can also request a notice disclosing the categories or personal
          information we have shared with third parties, if any, for the third parties’ direct marketing purposes. To
          request a notice, please submit your request by mail to: Orange Leaf, Attn: Customer Service, 14850 Montfort
          Drive, Suite 131 PMB22, Dallas, TX 75254. Please specify that you are requesting a “California Privacy Rights
          Notice.” We will make every effort to promptly respond to your request.
        </Text>
        <Title>
          The Official Rules for the $25 gift card giveaway
        </Title>
        <Text>
          Click <a 
            href="/files/25GCGiveaway_OfficialRules.pdf"
            target="_blank"
            rel="noopener noreferrer">
              here</a> for the official rules.
        </Text>
        <Title>CONTACT US</Title>
        <Text>
          If you have any questions or concerns regarding these Terms (including, without limitation, the Orange Leaf
          Rewards Loyalty Program Rules or the Gift Card Rules) or regarding the privacy or security of any Orange Leaf
          gift card or Orange Leaf Rewards card or account, please contact us via the{' '}
          <Link href="/about-us">Contact Us</Link> section of the Site, or write to us at Orange Leaf, 14850 Montfort
          Drive, Suite 131 PMB22, Dallas, TX 75254.
        </Text>
        <Text>© 2021 Orange Leaf, LLC. All rights reserved.</Text>
      </Paper>
    </MaxWidthWrapper>
  </RelativeWrapper>
);

export default TermsOfUseSection;
