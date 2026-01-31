
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: string;
  categoryId?: string;
}

export interface StrategicPoint {
  title: string;
  description: string;
  icon: any;
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  day: string;
}
