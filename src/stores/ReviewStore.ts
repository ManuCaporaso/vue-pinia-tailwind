import { defineStore } from 'pinia';
import type { Review } from '@/models/ReviewModel';

export const useReviewStore = defineStore('review', {
  state: () => ({
    reviews: [] as Review[],
  }),
  actions: {
    fetchReviews() {
      this.reviews = [
        {
          id: 1,
          image: '../assets/images/img1.jpg',
          title: 'Excelente experiencia',
          description: 'El servicio fue excepcional y el personal muy amable.',
          subtitle: '5 Estrellas',
          buttonLabel: 'Leer Más',
          footerText: 'Visitado en Octubre 2024',
        },
        {
          id: 2,
          image: '../assets/images/img2.jpg',
          title: 'Muy recomendable',
          description: 'Las habitaciones eran cómodas y la ubicación excelente.',
          subtitle: '4 Estrellas',
          buttonLabel: 'Ver Más',
          footerText: 'Visitado en Septiembre 2024',
        },
        {
          id: 3,
          image: '../assets/images/img3.jpg',
          title: 'Buena calidad/precio',
          description: 'Ideal para estancias cortas con un presupuesto ajustado.',
          subtitle: '3 Estrellas',
          buttonLabel: 'Descubrir',
          footerText: 'Visitado en Agosto 2024',
        },
      ];
    },
  },
});
