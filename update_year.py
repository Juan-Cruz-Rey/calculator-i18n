#!/usr/bin/env python3
"""
Script para actualizar el año 2025 a 2026 en todos los archivos MDX
"""

import os
import re
from pathlib import Path

def update_year_in_file(file_path):
    """Reemplaza 2025 por 2026 en un archivo"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Contar ocurrencias antes
        count_before = content.count('2025')

        if count_before == 0:
            return 0

        # Reemplazar 2025 por 2026
        new_content = content.replace('2025', '2026')

        # Escribir el archivo actualizado
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        return count_before
    except Exception as e:
        print(f"Error procesando {file_path}: {e}")
        return 0

def main():
    """Procesa todos los archivos MDX"""
    base_dir = Path('src/content/calculators')

    total_files = 0
    total_replacements = 0

    # Recorrer todos los archivos .mdx
    for mdx_file in base_dir.rglob('*.mdx'):
        replacements = update_year_in_file(mdx_file)
        if replacements > 0:
            total_files += 1
            total_replacements += replacements
            print(f"OK {mdx_file.relative_to(base_dir)}: {replacements} reemplazos")

    print(f"\n{'='*60}")
    print(f"Resumen:")
    print(f"  Archivos actualizados: {total_files}")
    print(f"  Total de reemplazos: {total_replacements}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
