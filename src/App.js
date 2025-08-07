
import React, { useState } from 'react';
import './index.css';


function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [originRect, setOriginRect] = useState(null);


  const projects = [
    {
      id: 1,
      title: "IKEA - Home can wait",
      contents: [
        { type: "text", text: "With restrictions easing, I was tasked to create an OOH campaign to celebrate London coming out of lockdown. The campaign appeared across Underground Zones 1 and 2." },
        { type: "image", src: "/img/ikea/ikea2.jpg", alt: "Extra A image" },
        { type: "image", src: process.env.PUBLIC_URL + "/img/ikea/ikea2.jpg", alt: "test path" },

        { type: "image", src: "/img/ikea/ikea1.jpg", alt: "Extra A image" },
        { type: "image", src: "/img/ikea/ikea3.jpg", alt: "Extra A image" },
        { type: "image", src: "/img/ikea/ikea4.jpg", alt: "Extra A image" },
      ]
    },
    {
      id: 2,
      title: "Uniqlo",
      contents: [
        { type: "text", text: "Uniqlo" },
        { type: "image", src: "/img/uniqlo/tshirt.jpg", alt: "Extra A image" },
        { type: "image", src: "/img/uniqlo/uniqlo1.jpg", alt: "Extra A image" },
        { type: "image", src: "/img/uniqlo/uniqlo2.jpg", alt: "Extra A image" },
        { type: "image", src: "/img/uniqlo/uniqlo3.jpg", alt: "Extra A image" },
        { type: "image", src: "/img/uniqlo/uniqlo4.jpg", alt: "Extra A image" },
        { type: "image", src: "/img/uniqlo/queue.jpg", alt: "Extra A image" },
        { type: "text", text: "Highlighting brand alignment and results." }
      ]
    },
    {
      id: 4,
      title: "Leyf",
      contents: [
        { type: "text", text: "The posters ran across London." },
        { type: "image", src: "/img/leyf/5.jpg", alt: "Extra A image" },
        { type: "image", src: "/img/leyf/1.jpg", alt: "Extra A image" },
        { type: "image", src: "/img/leyf/2.png", alt: "Extra A image" },
        { type: "image", src: "/img/leyf/3.jpg", alt: "Extra A image" },
        { type: "image", src: "/img/leyf/4.jpg", alt: "Extra A image" },
      ]
    },
    {
      id: 5,
      title: "London Sock Company",
      contents: [
        { type: "text", text: "Another Sock Company details." },
        { type: "video", src: "https://www.youtube.com/embed/KGD3SHvLpzk?si=6ilbahFNPzKEYbEz", alt: "London Sock Company Video" }

      ]
    },
    {
      id: 6,
      title: "Duolingo",
      contents: [
        { type: "text", text: "Yet another sock company info." },
        { type: "image", src: "/img/duolingo/duo1.jpg", alt: "Sock image 3" },
        { type: "image", src: "/img/duolingo/duo2.jpg", alt: "Sock image 3" },
        { type: "image", src: "/img/duolingo/duo3.jpg", alt: "Sock image 3" },
        { type: "image", src: "/img/duolingo/duo4.jpg", alt: "Sock image 3" },
        { type: "image", src: "/img/duolingo/duo5.jpg", alt: "Sock image 3" },
        { type: "image", src: "/img/duolingo/duo6.jpg", alt: "Sock image 3" },
      ]
    },
    {
      id: 7,
      title: "Snug",
      contents: [
        { type: "text", text: "This work for Snug, the original sofa-in-a-box company, showcases the extreme luxury of the brand’s most comfortable range yet: the Cloud Sundae." },
        { type: "video", src: " https://www.youtube.com/embed/PQPu4yeWUSs?si=z-z5VeFFkq5_FqTe", alt: "London Sock Company Video" }
      ]
    },
    {
      id: 8,
      title: "Gravestone Predictor",
      contents: [
        { type: "text", text: "Yet another sock company info." },
        { type: "image", src: "/img/gravestone/grave1.jpg", alt: "Sock image 3" },
        { type: "image", src: "/img/gravestone/grave2.jpg", alt: "grave" },
        { type: "image", src: "/img/gravestone/grave3.jpg", alt: "grave" },
        { type: "image", src: "/img/gravestone/grave4.jpg", alt: "grave" },
        { type: "image", src: "/img/gravestone/grave5.jpg", alt: "grave" },
      ]
    },
    {
      id: 9,
      title: "Notepad",
      contents: [
                { type: "text", text: "Having ideas is easy. All you do is stare at a blank sheet of paper until drops of blood form on your forehead. Everyone knows that the blank page is the worst part of the creative process; the first hurdle to confront when trying to create something new. Introducing the Doodled Pad: the notepad with scribbles, drawings and doodles from inspirational designers, writers and creatives so you never have that intimidating blank page staring back at you." },
        { type: "image", src: "/img/notepad/pad1.jpg", alt: "Sock image 3" },
        { type: "image", src: "/img/notepad/pad2.jpg", alt: "Sock image 3" },
        { type: "image", src: "/img/notepad/pad3.jpg", alt: "Sock image 3" },
        { type: "image", src: "/img/notepad/pad5.jpg", alt: "Sock image 3" },

      ]
    },
  ];

  const extraLightboxes = [
    {
      id: 900,
      title: "Contact",
      buttonLabel: "Contact",
      contents: [
        {
          type: "html",
          html: `
            <ul class="awards-list">
                          <li><strong>Phone</strong>07847578611</li>
              <li><strong>Email</strong>isabellejohnson826@gmail.com</li>
              <li><strong>Company site:</strong> newworldcreative.studio</li>
              <li><strong>Photo site</strong> isabellejohnsonphoto.com</li>
              <!-- Add as many as you like -->
            </ul> `
        },
        { type: "image", src: "/img/me.jpg", alt: "Extra A image" },

      ]
    },
    {
      id: 901,
      title: "Awards and Press",
      buttonLabel: "Awards and Press",
      contents: [
        { type: "text", text: "Some awards..." },
        {
          type: "html",
          html: `
            <ul class="awards-list">
              <li><strong>Cannes Lions</strong> – Silver, Film, 2023</li>
              <li><strong>D&AD</strong> – Wood Pencil, Art Direction, 2022</li>
              <li><strong>Clio Awards</strong> – Bronze, Digital, 2021</li>
              <li><strong>Campaign Big Awards</strong> – Winner, 2023</li>
              <li><strong>One Show</strong> – Merit, 2024</li>
              <li><strong>Vogue Feature</strong> – Photographer Highlight, 2022</li>
              <!-- Add as many as you like -->
            </ul>
          `
        },
        { type: "image", src: "/img/431A7267.jpg", alt: "Extra A image" },

      ]
    },
    {
      id: 902,
      title: "Etc",
      buttonLabel: "Etc",
      contents: [
        { type: "text", text: "I always have a creative project on the go. Below are just a few." },
        { type: "image", src: "/img/illustration.jpeg", alt: "Extra A image" },
        { type: "text", text: "I always have a creative project on the go. Below are just a few." },

      ]
    },
  ];

  const bottomButtons = [
    {
      id: 'bottom1',
      buttonLabel: 'More',
      title: 'Bottom Lightbox 1',
      contents: [
        { type: 'text', text: 'Content for bottom lightbox 1' },
        { type: 'image', src: '/img/bottom1.jpg', alt: 'Bottom image 1' },
      ],
    },
    {
      id: 'bottom2',
      buttonLabel: '+',
      title: 'Bottom Lightbox 2',
      contents: [
        { type: 'text', text: 'Content for bottom lightbox 2' },
      ],
    },
  ];

  const allItems = [...projects, ...extraLightboxes, ...bottomButtons];

  const handleClick = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOriginRect(rect);
    setActiveProjectId(prev => (prev === id ? null : id));
  };

  const renderLightbox = (title, contentArray, onClose, extraClass = '') => (
    <div className={`lightbox-overlay ${extraClass}`} onClick={onClose}>
      <div
        className={`project-gallery ${extraClass}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          transformOrigin: originRect
            ? `${originRect.left + originRect.width / 2}px ${originRect.top + originRect.height / 2}px`
            : 'center top',
        }}
      >
        <button className="lightbox-close-btn-top" onClick={onClose}>×</button>
        {title && <h2 className="lightbox-title">{title}</h2>}

        {contentArray.map((item, index) => {
          switch (item.type) {
            case 'image':
              return (
                <img
                  key={index}
                  src={item.src.startsWith('/')
                    ? process.env.PUBLIC_URL + item.src
                    : item.src}
                  alt={item.alt || ''}
                  style={{ width: '100%', maxWidth: 600, marginBottom: '1rem' }}
                />
              );
              case 'video':
                // If src includes "youtube.com/embed", render iframe; else render <video>
                if (item.src.includes("youtube.com/embed")) {
                  return (
                    <div key={index} className="video-container" style={{ marginBottom: '1rem' }}>
                      <iframe
                        width="560"
                        height="315"
                        src={item.src}
                        title={item.alt || "YouTube video"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ width: '100%', maxWidth: 600 }}
                      />
                    </div>
                  );
                } else {
                  return (
                    <video
                      key={index}
                      controls
                      style={{ width: '100%', maxWidth: 600, marginBottom: '1rem' }}
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  );
                }
              
            case 'text':
              return (
                <p key={index} className="lightbox-text">
                  {item.text}
                </p>
              );
              case 'html':
  return (
    <div
      key={index}
      className="lightbox-html"
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );

  return (
    <div>
      <h1>IJ</h1>

      {/* Extra Buttons */}
      <div className="extra-buttons">
        {extraLightboxes.map(extra => (
          <button
            key={extra.id}
            className="extra-trigger-button"
            onClick={(e) => handleClick(e, extra.id)}
          >
            {extra.buttonLabel}
          </button>
        ))}
      </div>


      <h4 className="slidein shift" id="myHeading">
        
       
        <span className="mystyle3">Hi, I'm Isabelle (or Issy) and I'm a mid/senior creative.
        </span>{' '}
        I’ve been lucky enough to work with some of the business's biggest brands and awarded agencies including <span className="mystyle2">Mother, Saatchi & Saatchi and BETC Paris.​</span> {' '}
        I’m a cultural sponge who aspires to Jack Dee’s sense of humour and always carries a Sakura Pigma Micron 02 fineliner.
        In my previous life before advertising I worked at Vogue Paris which was full of very serious people, so I decided to be silly for a living.
        I have a sharp radar for bullshit – especially my own.
        Having graduated from UCL, I speak multiple languages and also work as a photographer inside and outside of adland.
        I attended School of Communication Arts 2.0 2019/20 with a scholarship.
      </h4>

      {/* Project Buttons */}
      <div className="project-links">
        {projects.map(project => (
          <div key={project.id}>
            <button
              className="project-title-button"
              onClick={(e) => handleClick(e, project.id)}
            >
              {project.title} <span>&#8595;</span>
            </button>
          </div>
        ))}
      </div>

{/* Bottom Buttons */}
<div className="bottom-buttons">
  {bottomButtons.map(button => (
    <button
      key={button.id}
      className="bottom-button"
      onClick={(e) => handleClick(e, button.id)}
    >
      {button.buttonLabel}
    </button>
  ))}
</div>



      {/* One Lightbox Rendered */}
      {(() => {
        const current = allItems.find(item => item.id === activeProjectId);
        if (!current) return null;

        let extraClass = '';
        if (extraLightboxes.some(extra => extra.id === current.id)) {
          extraClass = 'extra-lightbox';
        } else if (bottomButtons.some(bottom => bottom.id === current.id)) {
          extraClass = 'bottom-lightbox';
        }

        return renderLightbox(current.title, current.contents, () => setActiveProjectId(null), extraClass);
      })()}
    </div>
  );
}

export default App;
