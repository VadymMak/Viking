import type {
  NavItem,
  StatItem,
  WhyItem,
  Review,
  ContactItem,
  FaqItem,
  ChatConfig,
  ServiceCategory,
  DaySchedule,
  MenuCategory,
  ImageMap,
} from './types';

// Switch to true when local /images/*.webp files are ready
export const USE_LOCAL_IMAGES = false;

// ---------------------------------------------------------------------------
// IMAGES
// ---------------------------------------------------------------------------
export const IMAGES: ImageMap = {
  hero: 'https://lz0aovj1xcjacz7f.public.blob.vercel-storage.com/briefs/cmo12ltqg0000l704k50qz2ot/1776319618437.webp',
  about: 'https://lz0aovj1xcjacz7f.public.blob.vercel-storage.com/briefs/cmo12ltqg0000l704k50qz2ot/1776319618861.webp',
  gallery: [
    'https://lz0aovj1xcjacz7f.public.blob.vercel-storage.com/briefs/cmo12ltqg0000l704k50qz2ot/1776319618437.webp',
    'https://lz0aovj1xcjacz7f.public.blob.vercel-storage.com/briefs/cmo12ltqg0000l704k50qz2ot/1776319618861.webp',
    'https://lz0aovj1xcjacz7f.public.blob.vercel-storage.com/briefs/cmo12ltqg0000l704k50qz2ot/1776319619295.webp',
    'https://lz0aovj1xcjacz7f.public.blob.vercel-storage.com/briefs/cmo12ltqg0000l704k50qz2ot/1776319619255.webp',
    'https://lz0aovj1xcjacz7f.public.blob.vercel-storage.com/briefs/cmo12ltqg0000l704k50qz2ot/1776319619374.webp',
    'https://lz0aovj1xcjacz7f.public.blob.vercel-storage.com/briefs/cmo12ltqg0000l704k50qz2ot/1776319620873.webp',
    'https://lz0aovj1xcjacz7f.public.blob.vercel-storage.com/briefs/cmo12ltqg0000l704k50qz2ot/1776319619557.webp',
  ],
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Book', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

// ---------------------------------------------------------------------------
// STATS
// ---------------------------------------------------------------------------
export const STATS: StatItem[] = [
  { value: '10+', label: 'Years of experience' },
  { value: '3000+', label: 'Happy clients' },
  { value: '98%', label: 'Satisfaction rate' },
  { value: '12mo', label: 'Work guarantee' },
];

// ---------------------------------------------------------------------------
// WHY US
// ---------------------------------------------------------------------------
export const WHY_ITEMS: WhyItem[] = [
  {
    id: '1',
    icon: '🔧',
    title: 'Skilled mechanics',
    description: 'Our team brings years of hands-on experience with all car makes — we treat your car like it\'s our own.',
  },
  {
    id: '2',
    icon: '⚡',
    title: 'Fast turnaround',
    description: 'Most jobs are done same day. We respect your time and keep you updated every step of the way.',
  },
  {
    id: '3',
    icon: '💰',
    title: 'Fair, honest pricing',
    description: 'No surprises on the invoice. We give you a clear estimate upfront and stick to it.',
  },
  {
    id: '4',
    icon: '🛡️',
    title: '12-month guarantee',
    description: 'Every repair comes with a 12-month warranty. We stand behind our work — always.',
  },
];

// ---------------------------------------------------------------------------
// SERVICE CATEGORIES (templateType: 'services')
// ---------------------------------------------------------------------------
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'diagnostics',
    name: 'Diagnostics',
    items: [
      {
        id: 'd1',
        name: 'Computer diagnostics',
        description: 'Full electronic scan of your vehicle — we find the issue before it finds you.',
        price: 'from 30 €',
        icon: '💻',
      },
      {
        id: 'd2',
        name: 'Wheel alignment',
        description: '3D precision alignment to keep your car tracking straight and your tyres lasting longer.',
        price: 'from 40 €',
        icon: '📐',
      },
    ],
  },
  {
    id: 'oil-service',
    name: 'Oil / Service',
    items: [
      {
        id: 'o1',
        name: 'Oil change',
        description: 'Engine oil + filter replacement with service interval reset. Quick, clean, done right.',
        price: 'from 35 €',
        icon: '🛢️',
      },
      {
        id: 'o2',
        name: 'Full service',
        description: 'Comprehensive maintenance check — filters, fluids, belts and everything in between.',
        price: 'from 80 €',
        icon: '🔩',
      },
    ],
  },
  {
    id: 'tires',
    name: 'Tires',
    items: [
      {
        id: 't1',
        name: 'Tyre change & balancing',
        description: 'Seasonal swap, balancing and storage — we\'ll have you rolling safely in no time.',
        price: 'from 10 € / tyre',
        icon: '🔄',
      },
      {
        id: 't2',
        name: 'Tyre repair',
        description: 'Puncture? We\'ll patch it up fast so you can get back on the road without the hassle.',
        price: 'from 15 €',
        icon: '🛞',
      },
    ],
  },
  {
    id: 'bodywork',
    name: 'Bodywork',
    items: [
      {
        id: 'b1',
        name: 'Dent & scratch repair',
        description: 'We restore your car\'s look with care — small dents or deeper scratches, we handle it all.',
        price: 'from 50 €',
        icon: '🎨',
      },
      {
        id: 'b2',
        name: 'Body panel work',
        description: 'Panel replacement and repair done with precision — your car will look like new again.',
        price: 'on request',
        icon: '🔨',
      },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    items: [
      {
        id: 'e1',
        name: 'Electrical diagnostics',
        description: 'From warning lights to wiring issues — we track down electrical gremlins quickly.',
        price: 'from 40 €',
        icon: '⚡',
      },
      {
        id: 'e2',
        name: 'Battery & starter service',
        description: 'Battery check, replacement, starter and alternator repair. No power? We\'ve got you.',
        price: 'from 30 €',
        icon: '🔋',
      },
    ],
  },
  {
    id: 'hard-job',
    name: 'Hard job',
    items: [
      {
        id: 'h1',
        name: 'Engine overhaul',
        description: 'Big job? No problem. Engine rebuild, head gasket, full remont — we take on the tough stuff.',
        price: 'from 200 €',
        icon: '⚙️',
      },
      {
        id: 'h2',
        name: 'Gearbox repair',
        description: 'Manual or automatic — gearbox issues don\'t scare us. We\'ll get your transmission singing again.',
        price: 'from 150 €',
        icon: '🔩',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// SCHEDULE (templateType: 'schedule')
// ---------------------------------------------------------------------------
export const SCHEDULE: DaySchedule[] = [
  {
    day: 'Monday',
    entries: [
      { time: '09:00', name: 'Morning service', instructor: 'Alex' },
      { time: '11:00', name: 'Diagnostics', instructor: 'Serhiy' },
      { time: '14:00', name: 'Afternoon service', instructor: 'Alex' },
    ],
  },
  {
    day: 'Tuesday',
    entries: [
      { time: '09:00', name: 'Brake repair', instructor: 'Serhiy' },
      { time: '11:00', name: 'Oil change', instructor: 'Dmytro' },
      { time: '15:00', name: 'Alignment', instructor: 'Alex' },
    ],
  },
];

// ---------------------------------------------------------------------------
// MENU CATEGORIES (templateType: 'menu') — not used
// ---------------------------------------------------------------------------
export const MENU_CATEGORIES: MenuCategory[] = [];

// ---------------------------------------------------------------------------
// REVIEWS
// ---------------------------------------------------------------------------
export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Michael T.',
    initial: 'M',
    text: 'Brought my car in for an oil change and left feeling genuinely cared for. The team at Viking is friendly, fast and fair. Already booked my next visit!',
    rating: 5,
    detail: 'Oil change, Volkswagen Golf',
  },
  {
    id: '2',
    name: 'Anna K.',
    initial: 'A',
    text: 'Had a tricky electrical issue that two other garages couldn\'t fix. Viking found it in under an hour. Honest, professional and really kind people.',
    rating: 5,
    detail: 'Electrical diagnostics, Toyota RAV4',
  },
  {
    id: '3',
    name: 'David R.',
    initial: 'D',
    text: 'Tyre swap done in 30 minutes while I had a coffee. Clean workshop, great prices and they actually explained what they were doing. Will be back!',
    rating: 5,
    detail: 'Tyre change, BMW 3 Series',
  },
  {
    id: '4',
    name: 'Sarah M.',
    initial: 'S',
    text: 'Engine overhaul — big job, big worry. But Viking made the whole process so smooth. Regular updates, no hidden costs, and the car runs better than ever.',
    rating: 5,
    detail: 'Engine overhaul, Skoda Octavia',
  },
];

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: '📍',
    title: 'Address',
    lines: ['Korolenko str 16, ap 37'],
  },
  {
    icon: '📞',
    title: 'Phone',
    lines: ['+380 99 088 3817'],
  },
  {
    icon: '✉️',
    title: 'Email',
    lines: ['makevytssvadym@gmail.com'],
  },
  {
    icon: '🕐',
    title: 'Working hours',
    lines: ['Mon–Fri: 09:00–19:00', 'Sat–Sun: Closed'],
  },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'How long does a typical repair take?',
    answer:
      'Most everyday jobs — oil change, brakes, tyres — are done within 1–2 hours. Bigger repairs like engine or gearbox work may take 1–3 days. We\'ll always give you a clear timeframe when you drop off your car.',
  },
  {
    id: '2',
    question: 'Do you work on all car makes and models?',
    answer:
      'Absolutely — we work on all common European, Japanese and American makes. VW, BMW, Toyota, Mercedes, Ford, Skoda, Hyundai… you name it, we\'ve seen it.',
  },
  {
    id: '3',
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, Visa/Mastercard and bank transfer. For larger repairs, we\'re happy to discuss a payment plan — just ask us.',
  },
  {
    id: '4',
    question: 'Is diagnostics charged separately?',
    answer:
      'Diagnostics starts from 30 €. If you go ahead with the repair at our workshop, we\'ll deduct the diagnostics fee from the total. No double-paying.',
  },
  {
    id: '5',
    question: 'How can I book an appointment?',
    answer:
      'Super easy — fill in the booking form on this page, or just send us a WhatsApp message. We\'ll confirm your slot and make sure everything is ready when you arrive.',
  },
];

// ---------------------------------------------------------------------------
// CHAT CONFIG
// ---------------------------------------------------------------------------
export const CHAT_CONFIG: ChatConfig = {
  greeting: 'Hey there! 👋 Welcome to Viking Auto. How can I help you today?',
  quickReplies: [
    {
      id: '1',
      label: '📋 Pricing',
      response:
        'Our prices start from 30 € for diagnostics, 35 € for an oil change and 10 € per tyre for a seasonal swap. For a precise quote, just message us or fill in the booking form!',
    },
    {
      id: '2',
      label: '🕐 Working hours',
      response: 'We\'re open Monday to Friday, 09:00–19:00. Closed on weekends. Need to squeeze in a visit? Drop us a WhatsApp and we\'ll see what we can do.',
    },
    {
      id: '3',
      label: '📍 Where are you?',
      response: 'Find us at Korolenko str 16, ap 37. Easy to reach and with parking right outside.',
    },
    {
      id: '4',
      label: '📅 Book a visit',
      response:
        'You can book via the form on this page, send a WhatsApp to +380990883817, or drop us an email. We\'ll get back to you quickly!',
    },
  ],
  fallbackResponse:
    'Thanks for reaching out! For a faster reply, send us a WhatsApp at +380990883817 or email makevytssvadym@gmail.com. Talk soon!',
};
